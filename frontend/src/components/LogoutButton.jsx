"use client";

import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { roleAtom } from "@/atoms/authAtom";
import { useLogin } from "@/hooks/useLogin";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const { logout } = useLogin();
  const router = useRouter();
  const setRole = useSetAtom(roleAtom);

  const handleLogout = async () => {
    try {
      await logout();
      setRole({ is_admin: false, is_manager: false });
      router.push("/login");
    } catch (error) {
      console.error("ログアウト失敗:", error);
      alert("ログアウトに失敗しました");
    }
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
