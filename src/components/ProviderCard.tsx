
import { Card, CardContent, CardFooter } from "./ui/card";
import ServiceDetails from "./ServiceDetails";

const ProviderCard = () => {
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
          <h3 className="md:text-lg font-semibold mt-1">Title</h3>
          <h6 className="text-sm">Service Type</h6>
          <p>Rating</p>
        </CardContent>
        <CardFooter className="w-full m-2 p-0">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <ServiceDetails/>
            </div>
            {/* <div className="mt-1 md:mt-0">
              <Button className="bg-chart-3 p-2" size={"sm"}>
                connect
              </Button>
            </div> */}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProviderCard;
