"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "./LogoutButton";

export default function Dashboard({
  navItems,
  staffName,
  storeName,
  children,
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="w-64">
          <SidebarHeader className="p-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback>てけ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{staffName}</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>メインメニュー</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className="flex items-center space-x-2"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <LogoutButton />
        </Sidebar>
        <main className="flex-1 w-full overflow-auto">
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold">ダッシュボード</h1>
          </header>
          <div className="p-4 w-full">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
