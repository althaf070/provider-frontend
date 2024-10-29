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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {  services } from "@/lib/constants";
import { useServiceStore } from "@/store/serviceStore";
import { Loader } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  servicename: z.string(),
  description: z.string(),
  price: z.string(),
 
});

const ServiceForm = () => {
  const {createService,isLoading,error} = useServiceStore()
  const [priceValue, setPriceValue] = useState("100");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      servicename:"",
      description:"",
      price: "100",
    }
  })

  // Function to handle form submission
  const onSubmit =async (values: z.infer<typeof formSchema>) => {
    const {servicename,description,price} = values
    try{
      await createService(servicename,description,price) 
      // **TODO add toast after successful creation
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 bg-primarygrey p-4 rounded-lg shadow-sm shadow-silver"
      >
        {/* Service Field */}
        <FormField
          control={form.control}
          name="servicename" 
          render={({ field }) => (
            <FormItem className="text-primarycharacoal">
              <FormLabel>Select Your Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service You Provide" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {Object.entries(services).map(([key, service])=> (
                    <>
                     <SelectItem value={service.type} key={key}>
                  {service.title}
                  </SelectItem>
                    </>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Give a brief description about the service you provide"
                  className="resize-none text-primarycharacoal"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price/hr</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-4">
                  <Input
                    type="range"
                    min={100}
                    max={1000}
                    step={10}
                    className="w-full"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setPriceValue(e.target.value);
                    }}
                  />
                  <span className="text-offwhite text-xl font-semibold">
                  ₹{priceValue}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          {error && <p>{error}</p>}
        <Button type="submit" variant={"secondary"}>{isLoading ? <Loader className="animate-spin" size={24}/>:"Create Service"}</Button>
      </form>
    </Form>
  );
};

export default ServiceForm;
