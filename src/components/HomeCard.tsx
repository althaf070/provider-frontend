
import { Link } from "react-router-dom";
import HyperText from "./ui/hyper-text";
import { useDashboardStore } from "@/store/dashboardstore";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
const HomeCard = () => {
  const {dashboardData,fetchDashboardData} = useDashboardStore()
  const {provider} =useAuthStore()
  useEffect(() => {
  if(provider?._id){
    fetchDashboardData(provider._id)
  }
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-12 md:grid-rows-2 m-5 shadow-lg">
        <div className="col-span-6 md:col-span-4 text-center w-full">
          <div className="bg-card-foreground rounded-lg w-full h-full text-center p-5 shadow-lg">
            <h2 className="text-base sm:text-lg font-medium">
              <HyperText text='Finished Total Services' />
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
           {dashboardData?.appointments.completed}
            </p>
          </div>
        </div>

        <div className="col-span-6 md:col-span-4 text-center shadow-lg w-full">
          <div className="bg-card-foreground w-full h-full p-5 rounded-lg">
          <h2 className="text-base sm:text-lg font-medium">
              <HyperText text='T*-tal Services' />
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
           {dashboardData?.services}
            </p>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 row-span-2 align-items-center flex text-center shadow-lg w-full h-full">
          <div className="bg-[#3C3D37] w-full h-full md:p-5 rounded-lg">
            <h2 className="text-xl sm:text-4xl lg:text-6xl font-bold">Teams</h2>
            <div>
              <HyperText text="Team name1" className="text-base" />
              <HyperText text="Team name2" className="text-base"/>
              <HyperText text="Team name3" className="text-base"/>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-5 shadow-lg w-full">
          <Link to={"/provider/dashboard"}>
          <div className="p-5 bg-accentblue h-full border-none w-full rounded-lg py-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              Dashboard
            </h2>
            <p className="text-base sm:text-lg font-medium">View Your Analytics</p>
          </div>
          </Link>
        </div>

        <div className="col-span-1 md:col-span-1"></div>

    <Link to={"/provider/reviews"}>
    <div className="col-span-1 ml-16 md:ml-0">
          <div className="p-7 bg-fieryOrange h-full border-none w-full rounded-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Ratings</h2>
            <p className="text-base sm:text-lg font-medium">View Your reviews</p>
          </div>
        </div>
    </Link>
      </div>
    </>
  );
};

export default HomeCard;
