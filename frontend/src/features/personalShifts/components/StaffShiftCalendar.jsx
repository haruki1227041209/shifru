import { useState } from "react";
import CalendarNavigation from "@/components/calendar/CalendarNavigation";

const StaffShiftCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [isFirstHalf, setIsFirstHalf] = useState(today.getDate() <= 15);

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
    if (isFirstHalf) {
      setIsFirstHalf(false);
      setMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (month === 0) setYear((prev) => prev - 1);
    } else {
      setIsFirstHalf(true);
    }
  };

  const goToNext = () => {
    if (isFirstHalf) {
      setIsFirstHalf(false);
    } else {
      setIsFirstHalf(true);
      setMonth((prev) => (prev === 11 ? 0 : prev + 1));
      if (month === 11) setYear((prev) => prev + 1);
    }
  };

  const isToday = (date) =>
    date === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

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
            className="border p-1 h-24 text-xs cursor-pointer flex flex-col justify-between"
          >
            {/* 日付 */}
            <div
              className={`${isToday(date) ? "text-blue-600 semi-bold" : ""}`}
            >
              {date}
            </div>

            <div className="text-[9px]">
              <div>ランチ</div>茅場町
            </div>

            {/* 時間表示 */}
            <div className="text-gray-600">10:00</div>

            {/* ラベル表示 */}
            <div className="font-medium">23:00</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
