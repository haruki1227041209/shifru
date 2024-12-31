import { useState } from "react";
import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import WeekdayHeader from "./WeekdayHeader";
import StaffShiftCell from "./StaffShiftCell";

const StaffShiftCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [isFirstHalf, setIsFirstHalf] = useState(today.getDate() <= 15);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startDay = isFirstHalf ? 1 : 16;
  const endDay = isFirstHalf ? 15 : daysInMonth;

  const dates = Array.from({ length: endDay - startDay + 1 }, (_, i) => {
    const day = i + startDay;
    return {
      year,
      month: month + 1,
      day,
    };
  });

  const firstDayOfWeek = new Date(year, month, startDay).getDay();

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

  const isToday = (date) => {
    return (
      date === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <div>
      <CalendarNavigation
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={`${year}年${month + 1}月 ${isFirstHalf ? "前半" : "後半"}`}
      />

      <WeekdayHeader />

      <div className="grid grid-cols-7 gap-0.5">
        {/* 空白セルを追加 */}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="p-1 h-24" />
        ))}

        {dates.map((date) => (
          <StaffShiftCell
            key={`${date.year}-${date.month}-${date.day}`}
            date={date}
            isToday={isToday(date.day)}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
