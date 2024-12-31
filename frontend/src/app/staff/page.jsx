"use client";

import useAuthorization from "@/hooks/useAuthorization";
import StaffShiftCalendar from "@/features/personalShifts/components/StaffShiftCalendar";

const StaffShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <StaffShiftCalendar />
    </>
  );
};

export default StaffShiftsPage;
