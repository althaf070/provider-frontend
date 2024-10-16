import ServiceDetails from "@/components/ServiceDetails";
import ServiceForm from "@/components/ServiceForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServiceManagemen = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Your Current services</h1>
      <div className="grid md:grid-cols-12 my-4">
        <div className="col-span-4">
          <div className="grid grid-cols-2 gap-3">
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
                <Button variant={"destructive"} className="p-2">
                  Delete
                </Button>
                <Button variant={"outline"} className="p-2 px-3 bg-silver">
                  Edit
                </Button>
              </div>
            </Card>
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
                <Button variant={"destructive"} className="p-2">
                  Delete
                </Button>
                <Button variant={"outline"} className="p-2 px-3 bg-silver">
                  Edit
                </Button>
              </div>
            </Card>
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
                <Button variant={"destructive"} className="p-2">
                  Delete
                </Button>
                <Button variant={"outline"} className="p-2 px-3 bg-silver">
                  Edit
                </Button>
              </div>
            </Card>
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
                <Button variant={"destructive"} className="p-2">
                  Delete
                </Button>
                <Button variant={"outline"} className="p-2 px-3 bg-silver">
                  Edit
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4 md:-mt-16 mt-3">
          <h1 className="text-4xl font-semibold">Add New services</h1>
          <ServiceForm/>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ServiceManagemen;
