import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Services, useServiceStore } from "@/store/serviceStore";
import { useState } from "react";
import { Loader } from "lucide-react";
import { Switch } from "./ui/switch";
import { useAuthStore } from "@/store/authStore";

const formSchema = z.object({
  description: z.string(),
  price: z.string(),
  available:z.boolean()
});

const EditServiceForm = ({ service, onClose }: { service: Services; onClose: () => void }) => {
  const { updateService, isLoading, error,getProviderService } = useServiceStore();
  const {provider} =useAuthStore()
  const [priceValue, setPriceValue] = useState(service.price);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: service.description,
      price: service.price,
      available:service.available
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { description, price,available } = values;
    await updateService(description, price,service._id,available,);
    if(provider?._id){
      getProviderService(provider?._id)
    }
    onClose(); 
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 bg-primarygrey p-4 rounded-lg shadow-sm"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} className="text-primarycharacoal"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setPriceValue(e.target.value);
                    }}
                    className="text-primarycharacoal"
                  />
                  <span className="text-xl font-semibold">₹{priceValue}</span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base mt-2">
                     Change Status
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
        {error && <p>{error}</p>}
        <Button type="submit" variant="secondary">
          {isLoading ? <Loader className="animate-spin" size={24} /> : "Update Service"}
        </Button>
        <Button type="button" variant="destructive" className="ml-2" onClick={onClose}>Cancel</Button>
      </form>
    </Form>
  );
};

export default EditServiceForm;
