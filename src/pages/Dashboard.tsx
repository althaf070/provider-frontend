
import ActiveServicesChart from "@/components/ActiveServicesChart";
import { LineCharts } from "@/components/LineChart";
import HyperText from "@/components/ui/hyper-text";
import UserDetails from "@/components/UserDetails";
import { useAuthStore } from "@/store/authStore";
import { useDashboardStore } from "@/store/dashboardstore";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect } from "react";

  // *TODO add transaction section
  // *TODO add team members section
const Dashboard = () => {
  const {provider} = useAuthStore()
  const {services} = useServiceStore()
const {dashboardData,fetchDashboardData} = useDashboardStore()
useEffect(() => {
if(provider?._id){
  fetchDashboardData(provider._id)
}
}, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-12">
        {/* User Details Section */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-chart-3 p-6 shadow-xl rounded-lg">
          <UserDetails />
        </div>

        {/* Revenue Section */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-chart-3 p-6 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold text-silver">Total Revenue</h3>
          <h1 className="text-5xl font-bold mt-2">₹{provider?.totalEarning}</h1>
        </div>

        {/* Job Stats Section */}
        <div className="col-span-12 md:col-span-4 bg-chart-3 p-2 md:p-6 shadow-xl rounded-lg">
         <h1 className="text-2xl font-semibold text-center">My Services</h1>
         {services?.length > 0 ? (
                services?.map(service => (
                  <HyperText text={service.servicename} className="text-base" key={service._id}/>
                ))
              ):  <HyperText text="No Services hasn't been added" className="text-base"/>}
             
        </div>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-8 ml-0">
      <LineCharts/>
        </div>
        <div className="col-span-12 md:col-span-4 bg-chart-3 p-6 shadow-xl rounded-lg">
        <div className="w-full col-span-full">
          <ActiveServicesChart/>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-chart-1 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">Total Jobs Completed</h2>
              <p className="text-3xl font-bold">{dashboardData?.appointments.completed || 0}</p>
            </div>
            <div className="bg-chart-1 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">Services Committed</h2>
              <p className="text-3xl font-bold">{dashboardData?.appointments.ongoing|| 0}</p>
            </div>
            <div className="bg-chart-1 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">New Requests</h2>
              <p className="text-3xl font-bold">{dashboardData?.appointments.pending || 0}</p>
            </div>
           
            {/* <div className="bg-chart-2 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">Total Team jobs</h2>
              <p className="text-3xl font-bold">8</p>
            </div>
            <div className="bg-chart-2 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">Committed Team jobs</h2>
              <p className="text-3xl font-bold">8</p>
            </div>
            <div className="bg-chart-2 md:p-4 shadow rounded-lg text-center">
              <h2 className="text-sm">Team Request</h2>
              <p className="text-3xl font-bold">8</p>
            </div> */}
        
          </section>
        </div>
      </div>


    </>
  );
};

export default Dashboard;
