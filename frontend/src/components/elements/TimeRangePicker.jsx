import { Button } from "../ui/button";
import CalendarTimePicker from "./CalendarTimePicker";

const TimeRangePicker = () => {
  return (
    <div className="space-y-4">
      <CalendarTimePicker label="開始時間" />
      <CalendarTimePicker label="終了時間" />

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
  );
};

export default TimeRangePicker;
