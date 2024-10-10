import ProviderCard from "@/components/ProviderCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Home = () => {
  return (
    <main>
       <div className="text-center mt-5">
       <h1 className="text-silver text-3xl font-bold lg:text-8xl">Welcome Provider</h1>
       <p className="text-muted text-sm text-wrap">Manage your services, bookings, and grow your network in one place.</p>
       </div>
       <div className="mx-8 my-5">
       <h3 className="font-semibold text-xl lg:text-4xl my-4 text-offwhite">Expand Your Network & Make Collabrations</h3>
      {/* <div className="grid sm:grid-cols-2  md:grid-cols-5 place-items-center gap-3"> */}
      
      <Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/2 lg:basis-1/5"><ProviderCard/></CarouselItem>
    <CarouselItem className="basis-1/2 lg:basis-1/5"><ProviderCard/></CarouselItem>
    <CarouselItem className="basis-1/2 lg:basis-1/5"><ProviderCard/></CarouselItem>
    <CarouselItem className="basis-1/2 lg:basis-1/5"><ProviderCard/></CarouselItem>
    <CarouselItem className="basis-1/2 lg:basis-1/5"><ProviderCard/></CarouselItem>
 
   
  </CarouselContent>
 
</Carousel>
      {/* </div> */}
       </div>
    </main>
  )
}

export default Home