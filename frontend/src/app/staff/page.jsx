"use client";

import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "@/components/LogoutButton";
import { useRouter } from "next/navigation";

const StaffPage = () => {
  useAuthorization("staff");

  const router = useRouter();

  const navigateToShifts = () => {
    router.push("/staff-shifts");
  };

  return (
    <div>
      <h1>スタッフ専用ページ</h1>
      <p>ここはスタッフのみがアクセスできます。</p>
      <LogoutButton />
      <button onClick={navigateToShifts}>シフト一覧を見る</button>
    </div>
  );
};

export default StaffPage;
