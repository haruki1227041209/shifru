"use client";

import { createArea } from "@/api/areaService";
import RegisterArea from "@/components/register/RegisterArea";
import useAuthorization from "@/hooks/useAuthorization";

const AdminAreaPage = () => {
  useAuthorization("admin");

  const handleAreaSubmit = async (areaData) => {
    try {
      const response = await createArea(areaData);
      console.log("エリア登録成功:", response);
      alert(`エリア「${response.name}」が登録されました!`);
    } catch (error) {
      console.error("エリア登録失敗:", error);
      alert("エリアの登録に失敗しました");
    }
  };

  return <RegisterArea title={"エリア"} onSubmit={handleAreaSubmit} />;
};

export default AdminAreaPage;
