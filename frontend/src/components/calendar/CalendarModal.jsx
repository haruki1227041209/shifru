import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
        <div className="space-y-4">
          <div>
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-700"
            >
              開始時間
            </label>
            <Input
              type="time"
              id="startTime"
              value={shift?.start_time || ""}
              // onChange={}
            />
          </div>
          <div>
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-700"
            >
              終了時間
            </label>
            <Input
              type="time"
              id="endTime"
              value={shift?.end_time || ""}
              // onChange={}
            />
          </div>
          <div className="flex justify-between">
            <Button
            // onClick={}
            >
              保存
            </Button>
            <Button
              // onClick={}
              variant="destructive"
            >
              削除
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
