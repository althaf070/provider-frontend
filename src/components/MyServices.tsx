import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceDetails from "@/components/ServiceDetails";
const MyServices = () => {
  return (
    <Card
    style={{ border: "none" }}
    className="bg-primarygrey rounded-lg shadow-sm shadow-offwhite p-3"
  >
    <div className="">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6EaCj17jLbF-dZp6flsAXvegvTbnFWpQ_vA&s"
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </div>
    <h2 className="text-lg font-semibold">Service title</h2>
    <p>price per hr</p>
    <ServiceDetails />
    <div className="flex gap-1 mt-1">
      <Button variant={"destructive"} className="p-2" size={"sm"}>
        Delete
      </Button>
      <Button variant={"outline"} className="p-2 px-3 bg-silver" size={"sm"}>
        Edit
      </Button>
    </div>
  </Card>
  )
}

export default MyServices