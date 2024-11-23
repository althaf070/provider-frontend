import HomeCard from "@/components/HomeCard";;
import GradualSpacing from "@/components/ui/gradual-spacing";
import { useAuthStore } from "@/store/authStore";


const Home = () => {
 
  const {provider} = useAuthStore()

  return (
    <main>
      <div className="text-center mt-5">
        <GradualSpacing
          className="font-display text-center text-2xl lg:text-8xl text-silver font-bold -tracking-widest md:text-7xl md:leading-[5rem]"
          text={`Hello ${provider?.username}`}
        /> 
        <p className="text-muted text-sm text-wrap">
          Manage your services, bookings, and grow your network in one place.
        </p>
      </div>
      <HomeCard />
      {/* <div className="md:mx-8 md:my-5">
        <h3 className="font-semibold text-xl lg:text-4xl my-4 text-offwhite">
          {services && services.length > 0 ? "Discover Other Service Providers" : "No Service Providers Found"}
        </h3>
     
        <Carousel>
          <CarouselContent>
            {services?.length > 0 &&
              services.map((service, i) => (
                <CarouselItem className="basis-1/2 lg:basis-1/4" key={i}>
                  <ProviderCard service={service} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      
      </div> */}
    </main>
  );
};

export default Home;
