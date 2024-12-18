"use client";

import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { roleAtom } from "@/atoms/authAtom";
import { useLogin } from "@/hooks/useLogin";

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

  return <button onClick={handleLogout}>ログアウト</button>;
};

export default LogoutButton;
