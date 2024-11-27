"use client";

import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "@/components/LogoutButton";

const StaffPage = () => {
  useAuthorization("staff");

  return (
    <div>
      <h1>スタッフ専用ページ</h1>
      <p>ここはスタッフのみがアクセスできます。</p>
      <LogoutButton />
    </div>
  );
};

export default StaffPage;
