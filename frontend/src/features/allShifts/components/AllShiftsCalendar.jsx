import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import { useAtom } from "jotai";
import { isFirstHalfAtom, monthAtom, yearAtom } from "@/atoms/calendarAtoms";
import { allShiftsAtom, shiftsByDateAtom } from "@/atoms/shiftsAtom";
import { generateDates, isModalAllowed, isToday } from "@/utils/calendarUtils";
import { useCalendarNavigation } from "@/hooks/useCalendarNavigation";
import ShiftTable from "./ShiftTable";

const AllShiftsCalendar = ({}) => {
  const [year] = useAtom(yearAtom);
  const [month] = useAtom(monthAtom);
  const [isFirstHalf] = useAtom(isFirstHalfAtom);
  const [allShifts, setAllShifts] = useAtom(allShiftsAtom);

  const calendarDates = generateDates(year, month, isFirstHalf);

  const { goToPrevious, goToNext } = useCalendarNavigation();

  setAllShifts({
    "大塚 春希": {
      lunch: [
        {
          shift_id: 50,
          staff_id: 5,
          day: "2024-11-01",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 51,
          staff_id: 5,
          day: "2024-11-07",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 52,
          staff_id: 5,
          day: "2024-11-14",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 53,
          staff_id: 5,
          day: "2024-11-15",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 54,
          staff_id: 5,
          day: "2024-11-21",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 55,
          staff_id: 5,
          day: "2024-11-22",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 56,
          staff_id: 5,
          day: "2024-11-28",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 57,
          staff_id: 5,
          day: "2024-11-29",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 172,
          staff_id: 5,
          day: "2024-11-05",
          start_time: "10:30",
          end_time: "16:00",
        },
        {
          shift_id: 178,
          staff_id: 5,
          day: "2025-02-01",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 179,
          staff_id: 5,
          day: "2025-02-02",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 180,
          staff_id: 5,
          day: "2025-02-03",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 181,
          staff_id: 5,
          day: "2025-02-06",
          start_time: "10:00",
          end_time: "16:00",
        },
      ],
      dinner: [
        {
          shift_id: 50,
          staff_id: 5,
          day: "2024-11-01",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 51,
          staff_id: 5,
          day: "2024-11-07",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 52,
          staff_id: 5,
          day: "2024-11-14",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 53,
          staff_id: 5,
          day: "2024-11-15",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 54,
          staff_id: 5,
          day: "2024-11-21",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 55,
          staff_id: 5,
          day: "2024-11-22",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 56,
          staff_id: 5,
          day: "2024-11-28",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 57,
          staff_id: 5,
          day: "2024-11-29",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 178,
          staff_id: 5,
          day: "2025-02-01",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 179,
          staff_id: 5,
          day: "2025-02-02",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 180,
          staff_id: 5,
          day: "2025-02-03",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 181,
          staff_id: 5,
          day: "2025-02-06",
          start_time: "17:00",
          end_time: "23:30",
        },
      ],
    },
  });

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
