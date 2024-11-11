import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useEffect } from "react";
import { format } from "date-fns";
import { useAppointmentStore } from "@/store/appointmentStore";
import { useAuthStore } from "@/store/authStore";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Badge } from "@/components/ui/badge";

const BookingManagement = () => {
  const { getProviderAppointments, appointments, isLoading, updateStatuscustom,cancelAppointment } = useAppointmentStore();
  const { provider } = useAuthStore();

  const handleUpdate = async (id: string, status: string) => {
    try {
      await updateStatuscustom(id, status);
      alert("Updated status successfully");
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update status. Please try again.");
    }
  };
  
  const handleCancel = async (id: string) => {
    try {
      await cancelAppointment(id);
      alert("Updated status successfully");
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update status. Please try again.");
    }
  };
  
  useEffect(() => {
    if (provider?._id) {
      getProviderAppointments(provider._id);
    }
  }, [provider, getProviderAppointments]);

  if (isLoading) {
    return <div className="flex w-full min-h-[80vh] justify-center items-center"><LoadingSpinner /></div>
  }


  if (!Array.isArray(appointments) || appointments.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <h1 className="text-4xl lg:text-6xl font-bold text-center">No bookings</h1>
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>A list of your recent appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Service Requested</TableHead>
          <TableHead>Requested Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment._id}>
            <TableCell className="font-medium">{appointment?.users.username}</TableCell>
            <TableCell>{appointment.service.servicename}</TableCell>
            <TableCell>
              {format(new Date(appointment.appointmentDate), "dd-MM-yyyy")}
            </TableCell>
            <TableCell>{appointment.status || "Pending"}</TableCell>
            <TableCell>{appointment.payment}</TableCell>
            <TableCell>{appointment.service.price}</TableCell>
            <TableCell className="text-right">
              <div className="flex gap-2 justify-end">
                {appointment.status === "pending" && (
                  <Button onClick={() => handleUpdate(appointment._id,'confirmed')}>Accept</Button>
                ) }
                {appointment.status === "confirmed"&&<Button onClick={() => handleUpdate(appointment._id,'completed')}>Completed</Button>}
                {appointment.status === "completed"&& appointment.payment=="cash"&&<Button onClick={() => handleUpdate(appointment._id,'paid')}>Paid</Button>}
                {appointment.status === "completed"&& appointment.payment=="online" && <Badge variant={"destructive"}>Payment pending</Badge>}
                {appointment.status === "paid"&& <Badge className="bg-accentgreen"><p>Service Completed</p></Badge>}
                {appointment.status == "pending"&& <Button variant="destructive" onClick={() => handleCancel(appointment._id)}>Cancel</Button>}
             
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookingManagement;
