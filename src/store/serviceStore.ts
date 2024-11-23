import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
import { toast } from "sonner"
import { create } from "zustand";

export interface Provider {
  _id: string;
  username: string;
  email: string;
  address: string;
  district: string;
  phoneNumber: string;
  profilepic?: string; 
}
export interface Services {
    _id:string
    servicename:string;
    description:string;
    price:string;
    available:boolean;
    providerId?: Provider;
}

interface ServiceState {
services:Services[];
isLoading:boolean;
error:string | null;
message: string | null;
}

interface ServiceActions {
    createService:(servicename:string,description:string,price:string)=>Promise<void>;
    getProviderService:(id:string)=>Promise<void>
    deleteService:(id:string)=>Promise<void> 
    updateService:(description:string,price:string,id:string,available:boolean)=>Promise<void>
    getServiceByid:(id:string)=> Promise<void>
    providerException:(providerId:string)=> Promise<void>
  }
interface ErrorResponseData {
    message?: string;
  }
type ServiceStore = ServiceState & ServiceActions
export const useServiceStore = create<ServiceStore>((set)=> ({
services:[],
isLoading:false,
error:null,
message:null,

createService:async(servicename:string,description:string,price:string)=> {
set({isLoading:true,error:null})
try {
    const response = await axios.post(`${SERVER_URL}/service/create`,{
        servicename,
        description,
        price,
    })
   set((state) => ({
    services: [...state.services, response.data.services],
    isLoading: false,
    error: null
  }));
toast.success(response.data.message)
}  catch (err: unknown) {
    const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error Creating Service",
      isLoading: false,
    });
    toast.error(error.response?.data?.message)
    throw error;
  }
},

getProviderService:async(id:string)=> {
  set({isLoading: true,error:null});
  try {
    const response = await axios.get(`${SERVER_URL}/service/providerservices/${id}`)
    set({isLoading:false,services:response.data.services,error:null});
   
  } catch (err: unknown) {
    const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error fetching Service",
      isLoading: false,
    });
    throw error;
  }
},

deleteService: async (id: string) => {
  set({ isLoading: true, error: null })
  try {
    set((state) => ({
      isLoading: false,
      error: null,
      services: state.services.filter(service => service._id !== id)
    }))
    toast.warning("Service deleted successfully")
    await axios.delete(`${SERVER_URL}/service/delete/${id}`)
  } catch (error) {
    console.log(error, "in delete service")
    set({ isLoading: false, error: "Failed to delete service" })
  }
},

updateService: async (description: string, price: string, id: string, available: boolean) => {
  set({ isLoading: true, error: null });
  try {
  await axios.put(`${SERVER_URL}/service/edit/${id}`, {
      description,
      price,
      available,
    });

    // Update the specific service in the state
    set((state) => ({
      isLoading: false,
      error: null,
      services: state.services.map(service =>
        service._id === id ? { ...service, description, price, available } : service
      ),
    }));
    toast.info("Service updated successfully")
  } catch (err) {
    const error = err as AxiosError<ErrorResponseData>
    set({
      error: error.response?.data?.message || "Error updating Service",
      isLoading: false,
    });
    toast.error(error.response?.data?.message)
  }
},


getServiceByid:async(id:string)=> {
  set({ isLoading: true, error:null})
  try {
    const response = await axios.get(`${SERVER_URL}/service/${id}`)
    set({isLoading:false,services:response.data.services,error:null})
  } catch (err) {
    const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error fetching Service",
      isLoading: false,
    });
    throw error;
  }
},

providerException: async (providerId:string) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.get(`${SERVER_URL}/service/providerexception/${providerId}`);
    set({ isLoading: false, services: response.data.services, error: null });
  } catch (err) {
    const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error fetching Service",
      isLoading: false,
    });
    throw error;
  }
}
}))