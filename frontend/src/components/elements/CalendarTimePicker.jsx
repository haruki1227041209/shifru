import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const CalendarTimePicker = ({ label, value, onChange }) => {
  const generateTimeOptions = () => {
    const times = [];
    let hour = 10;
    let minute = 0;

    while (hour < 24) {
      const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      times.push(time);

      if (hour === 23 && minute === 30) break;

      minute += 15;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }

    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div>
      <Label className="block text-sm font-medium text-gray-700">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="時間を選択して下さい" />
        </SelectTrigger>
        <SelectContent>
          {label === "終了時間" && (
            <SelectItem value="23:45">LASTまで</SelectItem>
          )}
          {timeOptions.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CalendarTimePicker;
