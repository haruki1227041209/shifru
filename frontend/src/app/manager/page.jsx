"use client";

import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "@/components/LogoutButton";
import ShiftSchedule from "@/components/ShiftSchedule/ShiftSchedule";

const ManagerPage = () => {
  useAuthorization("manager");

  return (
    <div>
      <ShiftSchedule />
      <LogoutButton />
    </div>
  );
};

export default ManagerPage;
