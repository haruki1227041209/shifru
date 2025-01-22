"use client";

import useAuthorization from "@/hooks/useAuthorization";
import AllShiftsCalendar from "@/features/allShifts/components/AllShiftsCalendar";

const AllShiftsPage = () => {
  useAuthorization("staff");

  return (
    <>
      <AllShiftsCalendar />
    </>
  );
};

export default AllShiftsPage;
