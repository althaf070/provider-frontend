import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { IMG_SERVER_URL, SERVER_URL } from "@/lib/serverurl";
import { toast } from "sonner";

axios.defaults.withCredentials=true
axios.defaults.baseURL=IMG_SERVER_URL

interface Provider {
  _id:string
  username: string;
  email: string;
  address: string
  district:string
  phoneNumber: string,
  verified: boolean,
  totalEarning:number
  averageRating:number
  profilePic?:string
}

interface AuthState {
  provider: Provider | null;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
}

interface AuthActions {
  signup: (
    username: string,
    email: string,
    address: string,
    district: string,
    phoneNumber: string,
    password: string,
  ) => Promise<void>;
  login:(email:string, password:string)=>Promise<void>;
  logout:()=>Promise<void>;
  checkAuth:()=>Promise<void>;
}
interface ErrorResponseData {
  message?: string;
}
type AuthStore = AuthState & AuthActions;


export const useAuthStore = create<AuthStore>((set) => ({
  provider: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (
    username,
    email,
    address,
    district,
    phoneNumber,
    password
  ) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${SERVER_URL}/auth/provider/signup`, {
        username,
        email,
        address,
        district,
        phoneNumber,
        password,
      });

      set({
        provider: response.data.provider,
        isAuthenticated: true,
        message: response.data.message,
        isLoading: false,
      });
      toast.success(response.data.message);
    } catch (err: unknown) {
      const error = err as AxiosError<ErrorResponseData>;
    
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      toast.error(error.response?.data.message)
      throw error;
    }
  },
  login:async(email:string,password:string)=> {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${SERVER_URL}/auth/provider/login`,{
        email,password
      })
      set({provider:response.data.provider,isAuthenticated:true, message:response.data.message,isLoading: false,})
      toast.success(response.data.message);
    } catch (err: unknown) {
      const error = err as AxiosError<ErrorResponseData>;
    
      set({
        error: error.response?.data?.message || "Error Loggin in",
        isLoading: false,
      });
      toast.error(error.response?.data.message)
      throw error;
    }
  },
  
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${SERVER_URL}/auth/provider/logout`);
      set({ provider: null, isAuthenticated: false, error: null, isLoading: false });
      toast.warning("Logout was successful")
    } catch (error) {
      console.error(error); // Log for debugging
      set({ error: "Error logging out", isLoading: false });
    }
  },
  
  
  checkAuth:async()=> {
    set({isCheckingAuth:true,error:null})
    try {
      const response = await axios.get(`${SERVER_URL}/auth/provider/check`)
      set({provider:response.data.user,isCheckingAuth:false,isAuthenticated: true})
      console.log("check",response.data);
      
    } catch (err) {
      console.log(err); 
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  }
}));
