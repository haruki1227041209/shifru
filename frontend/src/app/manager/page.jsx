"use client";

import useAuthorization from "@/hooks/useAuthorization";
import ShiftSchedule from "@/components/ShiftSchedule/ShiftSchedule";

const ManagerPage = () => {
  useAuthorization("manager");

  return (
    <div>
      <ShiftSchedule />
    </div>
  );
};

export default ManagerPage;
