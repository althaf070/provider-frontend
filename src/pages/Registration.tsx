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
import { Select, SelectTrigger,SelectItem,SelectValue,SelectContent } from "@/components/ui/select";
import { keralaDistricts } from "@/lib/constants";


const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  district: z.string().min(1, "District is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
 
});

const Registration = () => {
  const { signup, error, isLoading,message } = useAuthStore();
  const navigate = useNavigate();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      district: "",
      phoneNumber: "",
      password: "",
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, email, address, district, phoneNumber, password } = values;
    try {
      await signup(username, email, address, district, phoneNumber, password);
       navigate('/provider/profilepic')
        
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }
  
  return (
    <div className="grid md:grid-cols-12 place-items-center">
      <div className="col-span-6">
        <div className="flex flex-col mt-20 h-full text-center">
          <h1 className="text-4xl font-semibold">Welcome To QuickFix</h1>
          <p className="text-lg text-silver">
            Begin Your journey as a friendly neighbourhood service provider
          </p>
          <img
            src="https://media.istockphoto.com/id/513249616/vector/plumber.jpg?s=612x612&w=0&k=20&c=oAm8MmRMAluaVcnpjF-qI0hgqueNUIjBHoYtoYsR2fg="
            alt="banner"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="col-span-4 bg-primarygrey p-7 mt-10 rounded-lg shadow-xl w-full ml-10">
        <h1 className="text-center font-semibold text-2xl">Register</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
            <FormField control={form.control} name="username" render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., jondoe" {...field} className="text-primarycharacoal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., abc123@gmail.com" {...field} className="text-primarycharacoal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="address" render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Your address" {...field} className="text-primarycharacoal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="district" render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your service location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {keralaDistricts.map(item => (
                    <SelectItem value={item} className="capitalize">{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="phoneNumber" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 9122435345" {...field} className="text-primarycharacoal" />
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
          
            
          {message && <p className="text-green-600 font-semibold">{message}</p>}
            {error && <p className="text-fieryOrange font-semibold">{error}</p>}
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader size={24} className="animate-spin"/> : "Register"}
            </Button>
          </form>
        </Form>
        <p className="text-center mt-4">
          Already have an account?
          <Link to="/provider/login" className="ml-2">
            <Button variant="outline" className="bg-accentgreen hover:bg-primarycharacoal">Login</Button>
          </Link>
        </p>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Registration;