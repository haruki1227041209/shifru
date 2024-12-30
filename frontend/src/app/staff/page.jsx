"use client";

import useAuthorization from "@/hooks/useAuthorization";
import StaffShiftCalender from "@/features/personalShifts/components/StaffShiftCalendar";

const StaffShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <StaffShiftCalender />
    </>
  );
};

export default StaffShiftsPage;
