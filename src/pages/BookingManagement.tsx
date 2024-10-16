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

import DatePicker from "@/components/DatePicker";
import { useState } from "react";
import { format } from "date-fns";

const BookingManagement = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert("Please select a date before submitting.");
      return;
    }
    const formattedDate = format(selectedDate, "yyyy-MM-dd");

    // Log the formatted date
    console.log("Selected Date:", formattedDate);
  };

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
        <TableRow>
          <TableCell className="font-medium">nme</TableCell>
          <TableCell>plumbing</TableCell>
          <TableCell>
            12-2234
            <span className="ml-1">
              <DatePicker date={selectedDate} setDate={setSelectedDate} />
            </span>
          </TableCell>
          <TableCell>pending</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
          <TableCell className="text-right">
            <div className="flex gap-2 justify-end">
              <Button onClick={handleSubmit}>Accept</Button>
              <Button variant={"destructive"}>Cancel</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BookingManagement;
