import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import { useAtom } from "jotai";
import { isFirstHalfAtom, monthAtom, yearAtom } from "@/atoms/calendarAtoms";
import { shiftsByDateAtom } from "@/atoms/shiftsAtom";
import { generateDates, isModalAllowed, isToday } from "@/utils/calendarUtils";
import { useCalendarNavigation } from "@/hooks/useCalendarNavigation";
import { getStaffShifts } from "@/api/staffShiftService";
import { useEffect } from "react";
import { formatDateKey } from "@/utils/dateUtils";
import CalendarModal from "@/components/calendar/CalendarModal";
import AllShiftsCell from "./AllShiftsCell";
import WeekdayHeader from "@/features/personalShifts/components/WeekdayHeader";

const AllShiftsCalendar = () => {
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

      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-0.5">
        {calendarDates.map((date) => {
          const dateKey = formatDateKey(date.year, date.month, date.day);
          const shift = shiftsByDate[dateKey]; // シフトデータを日付キーで取得

          const isAllowed = isModalAllowed(date);

          return isAllowed ? (
            <CalendarModal
              key={dateKey}
              dateKey={dateKey}
              date={date}
              shift={shift}
            >
              <AllShiftsCell
                dateKey={dateKey}
                date={date}
                shift={shift}
                isToday={isToday(date)}
              />
            </CalendarModal>
          ) : (
            <AllShiftsCell
              key={dateKey}
              dateKey={dateKey}
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

export default AllShiftsCalendar;
