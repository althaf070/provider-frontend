import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";
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
    getProviderService:()=>Promise<void>
    deleteService:(id:string)=>Promise<void> 
    updateService:(description:string,price:string,id:string,available:boolean)=>Promise<void>
    getServiceByid:(id:string)=> Promise<void>
    providerException:()=> Promise<Services[]>
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
}  catch (err: unknown) {
    const error = err as AxiosError<ErrorResponseData>;
    set({
      error: error.response?.data?.message || "Error Creating Service",
      isLoading: false,
    });
    throw error;
  }
},

getProviderService:async()=> {
  set({isLoading: true,error:null});
  try {
    const response = await axios.get(`${SERVER_URL}/service/providerservices`)
    set({services:response.data.services,isLoading:false});
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
    await axios.delete(`${SERVER_URL}/service/delete/${id}`)
    set((state) => ({
      isLoading: false,
      error: null,
      services: state.services.filter(service => service._id !== id) // filterd service from deleted services
    }))
  } catch (error) {
    console.log(error, "in delete service")
    set({ isLoading: false, error: "Failed to delete service" })
  }
},

updateService:async(description:string,price:string,id,available:boolean)=> {
set({ isLoading: true, error:null})
try {
  const response = await axios.put(`${SERVER_URL}/service/edit/${id}`,{
    description,price,available
  })
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

getServiceByid:async(id:string)=> {
  set({ isLoading: true, error:null})
  try {
    const response = await axios.post(`${SERVER_URL}/service/${id}`)
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

providerException: async (): Promise<Services[]> => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.get(`${SERVER_URL}/service/providerexception`);
    set({ isLoading: false, services: response.data.services, error: null });
    return response.data.services; 
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