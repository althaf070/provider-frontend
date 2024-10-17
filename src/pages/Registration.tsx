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

const formSchema = z.object({
  username: z.string().optional().or(z.literal('')), // Optional for login
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')), // Optional for login
  password: z.string().min(6)
});

interface RegistrationProps {
  isRegister?: boolean;
}

const Registration = ({ isRegister }: RegistrationProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: isRegister ? '' : undefined,
      email: '',
      phone: isRegister ? '' : undefined,
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <div className="flex flex-col mt-20 h-full text-center">
        <h1 className="text-4xl font-semibold">Welcome To QuickFix</h1>
        <p className="text-lg text-silver">Begin Your journery as friendly neighbourhood service provider</p>
        </div>
      </div>
      <div className="col-span-4 bg-primarygrey p-7 mt-10 rounded-lg shadow-xl">
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
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Registration;
