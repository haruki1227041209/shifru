import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import WeekdayHeader from "./WeekdayHeader";
import StaffShiftCell from "./StaffShiftCell";
import { useAtom } from "jotai";
import { isFirstHalfAtom, monthAtom, yearAtom } from "@/atoms/calendarAtoms";
import { generateDates, isToday } from "@/utils/calendarUtils";

const StaffShiftCalendar = () => {
  const [year] = useAtom(yearAtom);
  const [month] = useAtom(monthAtom);
  const [isFirstHalf] = useAtom(isFirstHalfAtom);

  const dates = generateDates(year, month, isFirstHalf);
  const firstDayOfWeek = new Date(year, month, isFirstHalf ? 1 : 16).getDay();

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
            isToday={isToday(date)}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
