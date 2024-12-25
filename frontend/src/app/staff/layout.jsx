"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import { Calendar, Users } from "lucide-react";
import { useAtom } from "jotai";
import { staffNameAtom } from "@/atoms/staffAtom";

export default function ManagerLayout({ children }) {
  const [staffName] = useAtom(staffNameAtom);

  const dashboardProps = {
    navItems: [
      { title: "個人シフト", icon: Users, url: "/staff" },
      { title: "確定シフト", icon: Calendar, url: "/staff/all-shifts" },
    ],
    staffName: staffName,
    storeName: "八丁堀店",
  };

  return <Dashboard {...dashboardProps}>{children}</Dashboard>;
}
