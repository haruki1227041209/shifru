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
import ShiftTable from "./ShiftTable";

const AllShiftsCalendar = ({ allShifts }) => {
  const [year] = useAtom(yearAtom);
  const [month] = useAtom(monthAtom);
  const [isFirstHalf] = useAtom(isFirstHalfAtom);
  const [shiftsByDate, setShiftsByDate] = useAtom(shiftsByDateAtom);

  const calendarDates = generateDates(year, month, isFirstHalf);
  const firstDayOfWeek = new Date(year, month, isFirstHalf ? 1 : 16).getDay();

  const { goToPrevious, goToNext } = useCalendarNavigation();

  return (
    <div>
      <CalendarNavigation
        onPrevious={() => goToPrevious(year, month, isFirstHalf)} // 無名関数
        onNext={() => goToNext(year, month, isFirstHalf)}
        title={`${year}年${month + 1}月 ${isFirstHalf ? "前半" : "後半"}`}
      />

      <ShiftTable calendarDates={calendarDates} allShifts={allShifts} />
    </div>
  );
};

export default AllShiftsCalendar;
