"use client";

import RegisterAreaStore from "@/components/register/RegisterAreaStore";
import useAuthorization from "@/hooks/useAuthorization";

const AdminStorePage = () => {
  useAuthorization("admin");

  return <RegisterAreaStore title={"店舗"} />;
};

export default AdminStorePage;
