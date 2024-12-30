import { useState } from "react";
import CalendarNavigation from "@/components/calendar/CalendarNavigation";

const StaffShiftCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const [isFirstHalf, setIsFirstHalf] = useState(true);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startDay = isFirstHalf ? 1 : 16;
  const endDay = isFirstHalf ? 15 : daysInMonth;

  const dates = Array.from(
    { length: endDay - startDay + 1 },
    (_, i) => i + startDay
  );

  const firstDayOfWeek = new Date(year, month, startDay).getDay();

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  const goToPrevious = () => {
    if (!isFirstHalf) {
      setIsFirstHalf(true);
    }
  };

  const goToNext = () => {
    if (isFirstHalf) {
      setIsFirstHalf(false);
    }
  };

  return (
    <div>
      <CalendarNavigation
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={`${year}年${month + 1}月 ${isFirstHalf ? "前半" : "後半"}`}
      />

      <div className="grid grid-cols-7 gap-0.5 text-center">
        {weekdays.map((weekday) => (
          <div key={weekday} className="text-xs font-bold p-2">
            {weekday}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 text-left">
        {/* 空白セルを追加 */}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="p-1 h-24" />
        ))}

        {/* 日付セルを追加 */}
        {dates.map((date) => (
          <div
            key={date}
            className="border p-1 h-24 text-xs overflow-y-auto cursor-pointer"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
