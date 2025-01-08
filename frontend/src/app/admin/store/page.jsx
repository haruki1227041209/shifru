"use client";

import useAuthorization from "@/hooks/useAuthorization";

const AdminStorePage = () => {
  useAuthorization("admin");

  return (
    <div>
      <h1>店舗登録ページ</h1>
      <p>ここは管理者のみがアクセスできます。</p>
    </div>
  );
};

export default AdminStorePage;
