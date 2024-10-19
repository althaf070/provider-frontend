
import HomeCard from "@/components/HomeCard";
import ProviderCard from "@/components/ProviderCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import GradualSpacing from "@/components/ui/gradual-spacing";


const Home = () => {
  // TODO if not logged in replace with register service text and remove home card
  return (
    <main>
      <div className="text-center mt-5">
        {/* <h1 className="text-silver text-3xl font-bold lg:text-8xl">Welcome Provider</h1> */}
        <GradualSpacing
          className="font-display text-center text-2xl lg:text-8xl text-silver font-bold -tracking-widest md:text-7xl md:leading-[5rem]"
          text="Hello Provider"
        /> 
        <p className="text-muted text-sm text-wrap">
          Manage your services, bookings, and grow your network in one place.
        </p>
      </div>
      <HomeCard/>
      <div className="mx-8 my-5">
        <h3 className="font-semibold text-xl lg:text-4xl my-4 text-offwhite">
         Discover Other Service Providers
        </h3>
     
        <Carousel>
          <CarouselContent >
            <CarouselItem className="basis-1/2 lg:basis-1/5">
              <ProviderCard />
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/5">
              <ProviderCard />
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/5">
              <ProviderCard />
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/5">
              <ProviderCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      
      </div>
    </main>
  );
};

export default Home;
