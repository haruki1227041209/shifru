"use client";

import { getAreas } from "@/api/areaService";
import { createShop } from "@/api/storeService";
import RegisterStore from "@/components/register/RegisterStore";
import useAuthorization from "@/hooks/useAuthorization";
import { useEffect, useState } from "react";

const AdminStorePage = () => {
  useAuthorization("admin");

  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const areasData = await getAreas();
        setAreas(areasData);
      } catch (error) {
        console.error("エリアの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAreas();
  }, []);

  if (isLoading) {
    return <p>エリアを読み込んでいます...</p>;
  }

  const handleStoreSubmit = async (storeData) => {
    try {
      const response = await createShop(storeData);
      console.log("店舗登録成功:", response);
      alert(`店舗「${response.name}」が登録されました!`);
    } catch (error) {
      console.error("店舗登録失敗:", error);
      alert("店舗の登録に失敗しました");
    }
  };

  return (
    <RegisterStore title={"店舗"} areas={areas} onSubmit={handleStoreSubmit} />
  );
};

export default AdminStorePage;
