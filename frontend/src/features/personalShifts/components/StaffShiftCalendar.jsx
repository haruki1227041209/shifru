import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import WeekdayHeader from "./WeekdayHeader";
import StaffShiftCell from "./StaffShiftCell";
import { useAtom } from "jotai";
import { isFirstHalfAtom, monthAtom, yearAtom } from "@/atoms/calendarAtoms";
import { shiftsByDateAtom } from "@/atoms/shiftsAtom";
import { generateDates, isToday } from "@/utils/calendarUtils";
import { useCalendarNavigation } from "@/hooks/useCalendarNavigation";
import { getStaffShifts } from "@/api/staffShiftService";
import { useEffect } from "react";
import { formatDateKey } from "@/utils/dateUtils";

const StaffShiftCalendar = () => {
  const [year] = useAtom(yearAtom);
  const [month] = useAtom(monthAtom);
  const [isFirstHalf] = useAtom(isFirstHalfAtom);
  const [shiftsByDate, setShiftsByDate] = useAtom(shiftsByDateAtom);

  const calendarDates = generateDates(year, month, isFirstHalf);
  const firstDayOfWeek = new Date(year, month, isFirstHalf ? 1 : 16).getDay();

  const { goToPrevious, goToNext } = useCalendarNavigation();

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const map = await getStaffShifts();
        setShiftsByDate(map);
      } catch (error) {
        console.error("シフトデータの取得失敗:", error);
      }
    };
    fetchShifts();
  }, []);

  return (
    <div>
      <CalendarNavigation
        onPrevious={() => goToPrevious(year, month, isFirstHalf)} // 無名関数
        onNext={() => goToNext(year, month, isFirstHalf)}
        title={`${year}年${month + 1}月 ${isFirstHalf ? "前半" : "後半"}`}
      />

      <WeekdayHeader />

      <div className="grid grid-cols-7 gap-0.5">
        {/* 空白セルを追加 */}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="p-1 h-24" />
        ))}

        {calendarDates.map((date) => {
          const dateKey = formatDateKey(date.year, date.month, date.day);
          const shift = shiftsByDate[dateKey]; // シフトデータを日付キーで取得

          return (
            <StaffShiftCell
              key={dateKey}
              date={date}
              shift={shift}
              isToday={isToday(date)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
