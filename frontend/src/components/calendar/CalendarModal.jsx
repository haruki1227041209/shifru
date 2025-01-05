import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TimeRangePicker from "../elements/TimeRangePicker";

const CalendarModal = ({ children, date, shift, dateKey }) => {
  return (
    <Dialog key={dateKey}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`${date.month}/${date.day}`}</DialogTitle>
        </DialogHeader>
        {shift ? (
          <div>{`${shift.start_time}から${shift.end_time}`}</div>
        ) : (
          <div>なし</div>
        )}
        <TimeRangePicker />
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
