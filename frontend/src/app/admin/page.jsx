"use client";

import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "@/components/elements/LogoutButton";

const AdminPage = () => {
  useAuthorization("admin");

  return (
    <div>
      <h1>管理者専用ページ</h1>
      <p>ここは管理者のみがアクセスできます。</p>
      <LogoutButton />
    </div>
  );
};

export default AdminPage;
