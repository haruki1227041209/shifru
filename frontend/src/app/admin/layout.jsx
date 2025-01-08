"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import { Calendar, Users, Settings } from "lucide-react";
import { useAtom } from "jotai";
import { staffNameAtom } from "@/atoms/staffAtom";

export default function AdminLayout({ children }) {
  const [staffName] = useAtom(staffNameAtom);

  const dashboardProps = {
    navItems: [
      { title: "エリア登録", icon: Settings, url: "/admin/area" },
      { title: "店舗登録", icon: Settings, url: "/admin/store" },
      { title: "店長登録", icon: Settings, url: "/admin/regist-manager" },
    ],
    staffName: staffName,
    storeName: "渋谷店",
  };

  return <Dashboard {...dashboardProps}>{children}</Dashboard>;
}
