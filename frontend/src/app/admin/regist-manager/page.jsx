"use client";

import useAuthorization from "@/hooks/useAuthorization";

const AdminRegistManagerPage = () => {
  useAuthorization("admin");

  return (
    <div>
      <h1>店長登録ページ</h1>
      <p>ここは管理者のみがアクセスできます。</p>
    </div>
  );
};

export default AdminRegistManagerPage;
