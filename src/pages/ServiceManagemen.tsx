
import LoadingSpinner from "@/components/LoadingSpinner";
import MyServices from "@/components/MyServices";
import ServiceForm from "@/components/ServiceForm";
import { useAuthStore } from "@/store/authStore";
import { useServiceStore } from "@/store/serviceStore";
import { useEffect } from "react";

const ServiceManagemen = () => {
  const { getProviderService, services, isLoading } = useServiceStore();
const{provider} = useAuthStore()
  const id = provider?._id
  useEffect(() => {
    if(id){
      getProviderService(id)
    }
  }, [getProviderService]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-4xl font-bold">Your Current Services</h1>
      <div className="grid md:grid-cols-12 my-4">
        <div className="col-span-4">
          <div className="grid md:grid-cols-2 gap-3">
            {services?.length > 0 ? (
              services.map((service) => (
                <MyServices
                  key={service.servicename}
                  service={service}
                />
              ))
            ) : (
              <p className="text-center font-semibold text-2xl">
                No services added by you
              </p>
            )}
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4 md:-mt-16 mt-3">
          <h1 className="text-4xl font-semibold">
         Add New Service
          </h1>
       <ServiceForm />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ServiceManagemen;
