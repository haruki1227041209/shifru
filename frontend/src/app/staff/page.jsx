"use client";

import useAuthorization from "@/hooks/useAuthorization";
import StaffShiftCalender from "@/components/StaffShiftCalender/StaffShiftCalender";

const StaffShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <StaffShiftCalender />
    </>
  );
};

export default StaffShiftsPage;
