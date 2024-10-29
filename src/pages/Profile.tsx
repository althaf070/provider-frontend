import MyServices from "@/components/MyServices"
import UserDetails from "@/components/UserDetails"
import { useServiceStore } from "@/store/serviceStore"
import { useEffect } from "react"

const Profile = () => {
  const {getProviderService,services} = useServiceStore()
  useEffect(() => {
  getProviderService()
  }, [getProviderService])
  return (
    <div>
       <section className=" min-h-screen p-6 rounded-lg">
      <div>
        <UserDetails />
      </div>
        <h1 className="text-2xl font-semibold">My Services</h1>
      <div className="grid grid-cols-12">
      <div className="col-span-4 grid md:grid-cols-2 gap-3">
       {services.length > 0 ? services.map((service)=> (
        <MyServices service={service} onProfile/>
       )) : <h1>No Services Available</h1>}
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-4">
        <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-primarydarkgrey rounded-lg">
          <p className="text-lg font-semibold">Total Jobs</p>
          <h1 className="text-xl font-semibold">120</h1>
        </div>
        <div className="p-4 bg-primarydarkgrey rounded-lg">
          <p className="text-lg font-semibold">Average Ratings</p>
          <h1 className="text-xl font-semibold">120</h1>
        </div>
        </div>
        
      </div>
      </div>
    </section>
    </div>
  )
}

export default Profile