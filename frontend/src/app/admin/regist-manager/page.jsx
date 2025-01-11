"use client";

import { createStaff } from "@/api/staffService";
import { getStores } from "@/api/storeService";
import RegisterStaff from "@/components/register/RegisterStaff";
import useAuthorization from "@/hooks/useAuthorization";
import { useEffect, useState } from "react";

const AdminRegistManagerPage = () => {
  useAuthorization("admin");

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const storesData = await getStores();
        setStores(storesData);
      } catch (error) {
        console.error("ストアの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (isLoading) {
    return <p>ストアを読み込んでいます...</p>;
  }

  const handleManagerSubmit = async (staffData) => {
    try {
      const response = await createStaff(staffData);
      console.log("スタッフ登録成功:", response);
      alert(`スタッフ「${response.name}」が登録されました!`);
    } catch (error) {
      console.error("スタッフ登録失敗:", error);
      alert("スタッフの登録に失敗しました");
    }
  };

  return (
    <RegisterStaff
      title={"店長"}
      stores={stores}
      onSubmit={handleManagerSubmit}
    />
  );
};

export default AdminRegistManagerPage;
