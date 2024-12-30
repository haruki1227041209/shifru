"use client";

import useAuthorization from "@/hooks/useAuthorization";
import StaffShiftCalender from "@/features/personalShifts/components/StaffShiftCalender";

const StaffShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <StaffShiftCalender />
    </>
  );
};

export default StaffShiftsPage;
