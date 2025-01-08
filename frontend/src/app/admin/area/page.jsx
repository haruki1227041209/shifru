"use client";

import useAuthorization from "@/hooks/useAuthorization";

const AdminAreaPage = () => {
  useAuthorization("admin");

  return (
    <div>
      <h1>エリア登録ページ</h1>
      <p>ここは管理者のみがアクセスできます。</p>
    </div>
  );
};

export default AdminAreaPage;
