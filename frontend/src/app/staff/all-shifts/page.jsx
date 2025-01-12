"use client";

import useAuthorization from "@/hooks/useAuthorization";
import AllShiftsCalendar from "@/features/allShifts/components/AllShiftsCalendar";
import ShiftTable from "@/features/allShifts/components/ShiftTable";

const AllShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <AllShiftsCalendar />
      <ShiftTable />
    </>
  );
};

export default AllShiftsPage;
