import { Link } from "react-router-dom";
import { Card, CardContent,CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const ProviderCard = () => {
  return (
    <>
      <Card className="w-[10rem] md:w-[17rem] bg-primarygrey text-offwhite">
   <div>
   <img src="https://e7.pngegg.com/pngimages/60/583/png-clipart-man-holding-gray-laptop-car-kia-motors-auto-mechanic-automobile-repair-shop-motor-vehicle-service-mechanic-engineer-expert.png" alt="" className="w-full rounded-lg" />
   </div>
  <CardContent>
    <h3 className="text-lg font-semibold mt-1">Title</h3>
    <h4>Service Type</h4>
    <p>Price</p>
  </CardContent>
  <CardFooter className="w-full m-2 p-0">
  <div className="grid md:grid-cols-2 gap-3">
 <div> <Link to={'/provider/servicer/2'}>
   <Button className="bg-darkOlive">View Details</Button>
   </Link></div>
  <div className="mt-1 md:mt-0">
  <Button className="bg-darkOlive">connect</Button>
  </div>
  </div>
  </CardFooter>
</Card>
    </>
  );
};

export default ProviderCard;
