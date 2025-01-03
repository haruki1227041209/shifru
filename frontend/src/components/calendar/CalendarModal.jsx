import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CalendarModal = ({ children, date, shift, dateKey }) => {
  return (
    <Dialog key={dateKey}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`${date.month}/${date.day}`}</DialogTitle>
          <DialogDescription></DialogDescription>
          {shift ? (
            <div>{`${shift.start_time}から${shift.end_time}`}</div>
          ) : (
            <div>なし</div>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
