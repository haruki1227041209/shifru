"use client";

import * as React from "react";
import { LogOut } from "lucide-react";

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
import { Button } from "@/components/ui/button";

export default function ManagerDashboard({ children, navItems }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="w-64">
          <SidebarHeader className="p-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback>店長</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">山田 太郎</p>
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
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="#" className="flex items-center space-x-2">
                <LogOut className="h-5 w-5" />
                <span>ログアウト</span>
              </a>
            </Button>
          </div>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold">店長ダッシュボード</h1>
          </header>
          <div className="p-4">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
