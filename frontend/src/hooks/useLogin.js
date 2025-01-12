import { useSetAtom } from "jotai";
import { staffNameAtom, staffRoleAtom } from "@/atoms/staffAtom";
import { loginRequest } from "@/api/authService";

export const useLogin = () => {
  const setStaffName = useSetAtom(staffNameAtom);
  const setStaffRole = useSetAtom(staffRoleAtom);

  const login = async (employeeNumber, password, router) => {
    try {
      const data = await loginRequest(employeeNumber, password);

      setStaffName(data.staff_name);
      setStaffRole(data.role);

      if (data.role.is_admin) {
        router.push("/admin");
      } else if (data.role.is_manager) {
        router.push("/manager");
      } else {
        router.push("/staff");
      }

      return data;
    } catch (error) {
      console.error("ログイン失敗:", error);
      alert("ログインに失敗しました");
      throw error;
    }
  };

  return { login };
};
