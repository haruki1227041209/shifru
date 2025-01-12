import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TimeRangePicker from "../elements/TimeRangePicker";
import CurrentShift from "../elements/CurrentShift";

const CalendarModal = ({ children, date, shift, dateKey }) => {
  return (
    <Dialog key={dateKey}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`${date.month}/${date.day}`}</DialogTitle>
        </DialogHeader>
        <CurrentShift />
        <TimeRangePicker dateKey={dateKey} shift={shift} />
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
