"use client";

import RegisterAreaStore from "@/components/register/RegisterAreaStore";
import useAuthorization from "@/hooks/useAuthorization";

const AdminAreaPage = () => {
  useAuthorization("admin");

  return <RegisterAreaStore title={"エリア"} />;
};

export default AdminAreaPage;
