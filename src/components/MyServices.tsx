import { Button } from "@/components/ui/button";
import { Services, useServiceStore } from "@/store/serviceStore";

import EditServiceForm from "./EditServiceForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { useAuthStore } from "@/store/authStore";


type MyServicesProps = {
  service: Services;
  onProfile?:boolean
};

const MyServices = ({ service }: MyServicesProps) => {
  const { deleteService,getProviderService } = useServiceStore();
  const [open, setOpen] = useState(false);
  const{provider} = useAuthStore()
  const sid = provider?._id
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
const handleDelete = async(id:string)=> {
  try {
   if(sid){
    await deleteService(id)
    await getProviderService(sid)
   }
  } catch (error) {
    console.log(error);
    
  }
}
  return (
    <div
      className="bg-primarygrey rounded-lg shadow-sm p-5 w-[210px] h-auto"
    >
      <h2 className="text-lg font-semibold capitalize">
        {service.servicename} Service
      </h2>
      {service.available ? <Badge variant={"default"}>Available</Badge>:<Badge variant={"destructive"}>Not Available</Badge>}
      <p>Price/hr: ₹{service.price}</p>
      <div className="flex gap-1 mt-4">
        <Button
          variant="destructive"
          className="p-2"
          size="sm"
          onClick={() => handleDelete(service._id)}
        >
          Delete
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={"secondary"} size={"sm"} onClick={onOpen}>
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-primarydarkgrey">
            <DialogHeader>
              <DialogTitle>Edit Form</DialogTitle>
              <DialogDescription>
                <EditServiceForm service={service} onClose={onClose} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MyServices;
