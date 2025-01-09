"use client";

import RegisterStaff from "@/components/register/RegisterStaff";
import useAuthorization from "@/hooks/useAuthorization";

const AdminRegistManagerPage = () => {
  useAuthorization("admin");

  return <RegisterStaff title={"店長"} />;
};

export default AdminRegistManagerPage;
