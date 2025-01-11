"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import { Calendar, Users, Settings } from "lucide-react";
import { useAtom } from "jotai";
import { staffNameAtom } from "@/atoms/staffAtom";

export default function ManagerLayout({ children }) {
  const [staffName] = useAtom(staffNameAtom);

  const dashboardProps = {
    navItems: [
      { title: "シフト管理", icon: Calendar, url: "/manager" },
      { title: "スタッフ登録", icon: Users, url: "/manager/create-staff" },
      { title: "スタッフ管理", icon: Users, url: "/manager/staff-management" },
      { title: "設定", icon: Settings, url: "/manager/manager-settings" },
    ],
    staffName: staffName,
    storeName: "渋谷店",
  };

  return <Dashboard {...dashboardProps}>{children}</Dashboard>;
}
