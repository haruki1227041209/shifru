import { useSetAtom } from "jotai";
import { staffNameAtom } from "@/atoms/staffAtom";
import { loginRequest, logoutRequest } from "@/api/authService";

export const useLogin = () => {
  const setStaffName = useSetAtom(staffNameAtom);

  const login = async (employeeNumber, password) => {
    const data = await loginRequest(employeeNumber, password);
    setStaffName(data.staff_name);
    return data;
  };

  const logout = async () => {
    await logoutRequest();
    setStaffName("");
  };

  return { login, logout };
};
