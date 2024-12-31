import { useSetAtom } from "jotai";
import { yearAtom, monthAtom, isFirstHalfAtom } from "@/atoms/calendarAtoms";

export const useCalendarNavigation = () => {
  const setYear = useSetAtom(yearAtom);
  const setMonth = useSetAtom(monthAtom);
  const setIsFirstHalf = useSetAtom(isFirstHalfAtom);

  const goToPrevious = (year, month, isFirstHalf) => {
    if (isFirstHalf) {
      setIsFirstHalf(false);
      setMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (month === 0) setYear((prev) => prev - 1);
    } else {
      setIsFirstHalf(true);
    }
  };

  const goToNext = (year, month, isFirstHalf) => {
    if (isFirstHalf) {
      setIsFirstHalf(false);
    } else {
      setIsFirstHalf(true);
      setMonth((prev) => (prev === 11 ? 0 : prev + 1));
      if (month === 11) setYear((prev) => prev + 1);
    }
  };

  return { goToPrevious, goToNext };
};
