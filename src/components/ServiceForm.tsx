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
import { keralaDistricts, services } from "@/lib/constants";

const formSchema = z.object({
  service: z.string(),
  description: z.string(),
  price: z.string(),
  location: z.string(),
  profile: z.any() // 'z.any()' to handle the file input
});

const ServiceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  // Function to handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Create FormData to send the image file along with other fields
    const formData = new FormData();
    formData.append("service", values.service);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("location", values.location);

    // If a file is selected, append it to the formData
    if (values.profile && values.profile[0]) {
      formData.append("profile", values.profile[0]);
    }

    console.log([...formData]);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 bg-primarygrey p-4 rounded-lg shadow-sm shadow-silver"
      >
        {/* Service Field */}
        <FormField
          control={form.control}
          name="service" 
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
                <Input
                  placeholder="e.g., 200"
                  className="text-primarycharacoal"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location Field */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
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
          )}
        />

        {/* Profile Image Upload */}
        <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Your Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)} 
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
  );
};

export default ServiceForm;
