import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z.string().optional().or(z.literal("")), // Optional for login
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")), // Optional for login
  password: z.string().min(6)
});

interface RegistrationProps {
  isRegister?: boolean;
}

const Registration = ({ isRegister }: RegistrationProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: isRegister ? "" : undefined,
      email: "",
      phone: isRegister ? "" : undefined,
      password: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid md:grid-cols-12 place-items-center">
      <div className="col-span-6">
        <div className="flex flex-col mt-20 h-full text-center">
          <h1 className="text-4xl font-semibold">
            {isRegister ? "Welcome To QuickFix" : "Welcome Back"}
          </h1>
          <p className="text-lg text-silver">
            Begin Your journery as friendly neighbourhood service provider
          </p>
          <img
            src="https://media.istockphoto.com/id/513249616/vector/plumber.jpg?s=612x612&w=0&k=20&c=oAm8MmRMAluaVcnpjF-qI0hgqueNUIjBHoYtoYsR2fg="
            alt="banner"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="col-span-4 bg-primarygrey p-7 mt-10 rounded-lg shadow-xl w-full ml-10">
        <h1 className="text-center font-semibold text-2xl">
          {isRegister ? "Register" : "Login"}
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            {isRegister && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg: jondoe"
                        type="text"
                        {...field}
                        className="text-primarycharacoal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="eg: abc123@gmail.com"
                      type="email"
                      {...field}
                      className="text-primarycharacoal"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isRegister && (
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl className="w-full">
                      <Input
                        placeholder="eg: 9122435345"
                        {...field}
                        className="text-primarycharacoal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Password"
                      {...field}
                      type="password"
                      className="text-primarycharacoal"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
        {isRegister ? (
          <p>
            Already have account...?<Link to={"/provider/login"} className="ml-2">
            <Button className="bg-accentgreen hover:bg-primarycharacoal">Login</Button>
            </Link>
          </p>
        ) : (
          <p>
            Don't have account...?
            <Link to={"/provider/register"} className="ml-2">
            <Button className="bg-accentblue font-semibold hover:bg-primarycharacoal">Register Now</Button>
            </Link>
          </p>
        )}
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Registration;
