import create from "zustand";
import axios, { AxiosError } from "axios";
import { SERVER_URL } from "@/lib/serverurl";

// Define the types for the dashboard data structure
interface AppointmentsData {
  total: number;
  pending: number;
  ongoing: number;
  completed: number;
}

interface DashboardData {
  services: number;
  appointments: AppointmentsData;
  reviews: number;
}

interface DashboardState {
  dashboardData: DashboardData | null;
  loading: boolean;
  error: string | null;
  fetchDashboardData: (providerId: string) => Promise<void>;
}

// Define the Zustand store
export const useDashboardStore = create<DashboardState>((set) => ({
  dashboardData: null,
  loading: false,
  error: null,

  fetchDashboardData: async (providerId: string) => {
    set({ loading: true, error: null }); // Start loading and reset error

    try {
      const response = await axios.get(`${SERVER_URL}/service/provider/dashboard/${providerId}`);
      set({ dashboardData: response.data.data, loading: false ,error: null });
    } catch (error) {
        const err = error as AxiosError
      set({ error: err.message, loading: false });
    }
  },
}));
