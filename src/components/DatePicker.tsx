import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface DatePickerProps {
  date: Date | undefined; 
  setDate: (date: Date | undefined) => void;  
}

const DatePicker = ({ date, setDate } : DatePickerProps) => {
 
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
        className={cn(
          "justify-start text-left font-normal",
          !date && "text-primarydarkgrey"
        )}
      >
        {date ? format(date, "PPP") : <span >Reshedule</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0 bg-primarydarkgrey">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>
  )
}

export default DatePicker