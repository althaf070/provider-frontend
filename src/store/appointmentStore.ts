import { create } from "zustand";
import { SERVER_URL } from "@/lib/serverurl";
import axios, { AxiosError } from "axios";

interface Appointment {
_id:string
appointmentDate:Date
bookedDate:Date
status:string
payment:string
users:{
    username:string
}

service:{
  servicename:string
  price:string
}
}

interface AppointmentSate {
appointments:Appointment[]
isLoading:boolean;
error:string | null;
message: string | null;
}
interface AppointmentActiions{
getProviderAppointments:(id:string)=>Promise<void>;
updateStatuscustom:(aid:string,status:string)=>Promise<void>;
cancelAppointment:(aid:string)=>Promise<void>;
}
interface ErrorResponseData {
    message?: string;
  }
  type AppointmentStore = AppointmentSate & AppointmentActiions

  export const useAppointmentStore=create<AppointmentStore>((set)=> ({
    appointments:[],
    isLoading:false,
    error:null,
    message:null,

   async getProviderAppointments(id) {
       set({isLoading:true,error:null});
        try {
            const response = await axios.get(`${SERVER_URL}/appointments/get/${id}`)
            set({isLoading:false,appointments:response.data.appointment,error:null})
        } catch (err) {
            const error = err as AxiosError<ErrorResponseData>;
            set({
              error: error.response?.data?.message || "Error fetching Appointment",
              isLoading: false,
            });
            throw error;
          }
    },

  async updateStatuscustom(aid, status) {
    set({ isLoading: true, error: null });

    try {
        const response = await axios.patch(`${SERVER_URL}/appointments/update/${aid}`, {
            status
        });
        set((state) => ({
          isLoading: false,
          appointments: state.appointments.map((appointment) =>
              appointment._id === aid ? { ...appointment, status: status } : appointment
          ),
          error: null,
      }));
      return response.data;
        
    } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
            error: error.response?.data?.message || "Error updating appointment",
            isLoading: false,
        });
        
        console.error("Error updating appointment:", error);
        throw error; 
    }
},
async cancelAppointment(aid) {
  set({ isLoading: true, error: null });
      try {
          const response = await axios.delete(`${SERVER_URL}/appointments/cancel/${aid}`);
  
          set((state) => ({
              isLoading: false,
              appointments: state.appointments.filter(appointment => appointment._id !== aid),
              error: null,
          }));
          return response.data;  // Return data for further actions
      } catch (err) {
        const error = err as AxiosError<ErrorResponseData>;
        set({
          error: error.response?.data?.message || "Error fetching Appointment",
          isLoading: false,
        });
        throw error;
      }
},
  }))