import { useState } from "react";
import { Button } from "../ui/button";
import CalendarTimePicker from "./CalendarTimePicker";
import { useAtom } from "jotai";
import { shiftsByDateAtom } from "@/atoms/shiftsAtom";
import { DialogClose } from "../ui/dialog";
import { saveShifts } from "@/api/staffShiftService";

const TimeRangePicker = ({ dateKey, shift }) => {
  const [startTime, setStartTime] = useState(shift ? shift.start_time : "");
  const [endTime, setEndTime] = useState(shift ? shift.end_time : "");

  const [shiftsByDate, setShiftsByDate] = useAtom(shiftsByDateAtom);

  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const validateTimeRange = (start, end) => {
    if (start && end && toMinutes(start) > toMinutes(end)) {
      alert("開始時間は終了時間より前に設定してください！");
      return false;
    }
    return true;
  };

  const handleStartTimeChange = (value) => {
    if (endTime && !validateTimeRange(value, endTime)) {
      setStartTime("");
    } else {
      setStartTime(value);
    }
  };

  const handleEndTimeChange = (value) => {
    if (startTime && !validateTimeRange(startTime, value)) {
      setEndTime("");
    } else {
      setEndTime(value);
    }
  };

  const handleSave = async () => {
    if (startTime && endTime) {
      try {
        // バックエンドにシフトデータを送信(編集も可能)
        await saveShifts({
          day: dateKey,
          start_time: startTime,
          end_time: endTime,
        });
        // フロントエンド側の状態を更新
        setShiftsByDate({
          ...shiftsByDate,
          [dateKey]: {
            start_time: startTime,
            end_time: endTime,
          },
        });

        alert("シフトが保存されました！");
      } catch (error) {
        console.error("シフトの保存に失敗しました:", error);
        alert("シフトの保存に失敗しました！");
      }
    } else {
      alert("開始時間と終了時間を設定してください！");
    }
  };

  const handleDelete = () => {
    setStartTime("");
    setEndTime("");

    if (dateKey in shiftsByDate) {
      const updatedShifts = { ...shiftsByDate };
      delete updatedShifts[dateKey];

      setShiftsByDate(updatedShifts);
    }
  };

  return (
    <div className="space-y-4">
      <CalendarTimePicker
        label="開始時間"
        value={startTime}
        onChange={handleStartTimeChange}
      />
      <CalendarTimePicker
        label="終了時間"
        value={endTime}
        onChange={handleEndTimeChange}
      />

      <div className="flex justify-between">
        <DialogClose asChild>
          <Button onClick={handleSave}>保存</Button>
        </DialogClose>

        <Button onClick={handleDelete} variant="destructive">
          削除
        </Button>
      </div>
    </div>
  );
};

export default TimeRangePicker;
