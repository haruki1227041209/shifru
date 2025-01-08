import { useSetAtom } from "jotai";
import { staffNameAtom, staffRoleAtom } from "@/atoms/staffAtom";
import { loginRequest, logoutRequest } from "@/api/authService";

export const useLogin = () => {
  const setStaffName = useSetAtom(staffNameAtom);
  const setStaffRole = useSetAtom(staffRoleAtom);

  const login = async (employeeNumber, password) => {
    const data = await loginRequest(employeeNumber, password);
    setStaffName(data.staff_name);
    setStaffRole(data.role);
    return data;
  };

  const logout = async () => {
    await logoutRequest();
    setStaffName("");
    setStaffRole("");
  };

  return { login, logout };
};
