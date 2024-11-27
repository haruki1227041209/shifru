"use client";

import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "@/components/LogoutButton";

const ManagerPage = () => {
  useAuthorization("manager");

  return (
    <div>
      <h1>店長専用ページ</h1>
      <p>ここは店長のみがアクセスできます。</p>
      <LogoutButton />
    </div>
  );
};

export default ManagerPage;
