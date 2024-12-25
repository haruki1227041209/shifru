import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { roleAtom } from "@/atoms/authAtom";
import { useAtomValue } from "jotai";

const useAuthorization = (requiredRole) => {
  const router = useRouter();
  const role = useAtomValue(roleAtom);

  useEffect(() => {
    const isAuthorized =
      (requiredRole === "admin" && role.is_admin) ||
      (requiredRole === "manager" && role.is_manager) ||
      (requiredRole === "staff" && !role.is_admin && !role.is_manager);

    if (!isAuthorized) {
      router.push("/login");
    }
  }, [requiredRole, role, router]);

  return true;
};

export default useAuthorization;
