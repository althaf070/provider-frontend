import MyServices from "@/components/MyServices";

import ServiceForm from "@/components/ServiceForm";


const ServiceManagemen = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Your Current services</h1>
      <div className="grid md:grid-cols-12 my-4">
        <div className="col-span-4">
          <div className="grid md:grid-cols-2 gap-3">
            <MyServices/>
            <MyServices/>
            <MyServices/>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-4 md:-mt-16 mt-3">
          <h1 className="text-4xl font-semibold">Add New services</h1>
          <ServiceForm/>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ServiceManagemen;
