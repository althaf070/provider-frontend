
import { Card, CardContent, CardFooter } from "./ui/card";
import ServiceDetails from "./ServiceDetails";
import { Services } from "@/store/serviceStore";
// Define the type for the provider's information


// Adjusted type for ProviderCardProps
type ProviderCardProps = {
  service: Services
};
const ProviderCard = ({service}:ProviderCardProps) => {
  return (
    <>
      <Card className="w-[7rem] md:w-[17rem] bg-primarygrey text-offwhite">
        <div>
          <img
            src="https://e7.pngegg.com/pngimages/60/583/png-clipart-man-holding-gray-laptop-car-kia-motors-auto-mechanic-automobile-repair-shop-motor-vehicle-service-mechanic-engineer-expert.png"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <CardContent className="p-0 ml-2">
          <h3 className="md:text-lg font-semibold mt-1">{service.providerId?.username}</h3>
          
          <h6 className="text-sm">{service.servicename}</h6>
          <p>Rating</p>
        </CardContent>
        <CardFooter className="w-full m-2 p-0">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <ServiceDetails/>
            </div>
          
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProviderCard;
