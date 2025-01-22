"use client";

import AllShiftsCalendar from "@/features/allShifts/components/AllShiftsCalendar";
import useAuthorization from "@/hooks/useAuthorization";

const ManagerPage = () => {
  useAuthorization("manager");

  return (
    <div>
      <AllShiftsCalendar />
    </div>
  );
};

export default ManagerPage;
