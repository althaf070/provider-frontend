import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "./ui/switch";

const FormSchema = z.object({
  status: z.boolean().default(true).optional(),
});

const ChangeStatus = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status: false, // Providing a default value for 'status'
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form Submitted:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base mt-2">
                     Status
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                      type="submit"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ChangeStatus;
