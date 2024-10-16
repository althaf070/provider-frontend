import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { MdGroupAdd } from "react-icons/md"
  
const ServiceDetails = () => {
  return (
    <Dialog>
  <DialogTrigger asChild >
 <Button size={"sm"}>View Details</Button>
  </DialogTrigger>
  <DialogContent className="bg-primarygrey">
    <DialogHeader>
      <DialogTitle>Provider Name</DialogTitle>
      <DialogDescription>
    <p>Service Type</p>
    <p>Price per hour</p>
     <p> Age:</p>
    <p>  Gender:</p>
    <p>Rating</p>
    <Button size={"lg"}><MdGroupAdd /></Button>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default ServiceDetails