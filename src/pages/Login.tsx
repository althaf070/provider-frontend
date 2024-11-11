// Login.tsx
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
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Loader } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const Login = () => {
  const { login,isLoading,error } = useAuthStore();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
   const { email, password } = values;
   try {
    await login(email, password)
    navigate('/provider/verification')
   } catch (error) {
    console.log(error);
    
   }
  }

  return (
    <div className="grid md:grid-cols-12 place-items-center">
      <div className="col-span-6">
        <div className="flex flex-col mt-20 h-full text-center">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>
          <p className="text-lg text-silver">Login to continue</p>
          <img
            src="https://media.istockphoto.com/id/513249616/vector/plumber.jpg?s=612x612&w=0&k=20&c=oAm8MmRMAluaVcnpjF-qI0hgqueNUIjBHoYtoYsR2fg="
            alt="banner"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="col-span-4 bg-primarygrey p-7 mt-10 rounded-lg shadow-xl w-full ml-10">
        <h1 className="text-center font-semibold text-2xl">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., abc123@gmail.com" {...field} className="text-primarycharacoal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Password" type="password" {...field} className="text-primarycharacoal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
              {error && <p className='text-fieryOrange font-semibold mt-2'>{error}</p>}
            <Button type="submit">{isLoading ? <Loader className="animate-spin" size={24}/>:"Login"}</Button>
          </form>
        </Form>
        <p>
          Don't have an account?
          <Link to={"/provider/register"} className="ml-2">
            <Button className="bg-accentblue font-semibold hover:bg-primarycharacoal">Register Now</Button>
          </Link>
        </p>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Login;
