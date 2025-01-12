"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("staffName");
    localStorage.removeItem("staffRole");
    router.push("/login");
  };

  return (
    <>
      <div className="mt-auto p-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start"
        >
          <LogOut className="h-5 w-5" />
          <span>ログアウト</span>
        </Button>
      </div>
    </>
  );
};

export default LogoutButton;
