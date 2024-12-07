"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import { Calendar, Users, Settings } from "lucide-react";

export default function ManagerLayout({ children }) {
  const navItems = [
    { title: "シフト管理", icon: Calendar, url: "/manager" },
    { title: "スタッフ管理", icon: Users, url: "/manager/staff-management" },
    { title: "設定", icon: Settings, url: "/manager/settings" },
  ];

  return <Dashboard navItems={navItems}>{children}</Dashboard>;
}
