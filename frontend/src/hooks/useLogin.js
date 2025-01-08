import { useSetAtom } from "jotai";
import { staffNameAtom, staffRoleAtom } from "@/atoms/staffAtom";
import { loginRequest, logoutRequest } from "@/api/authService";

export const useLogin = () => {
  const setStaffName = useSetAtom(staffNameAtom);
  const setStaffRole = useSetAtom(staffRoleAtom);

  // ログイン処理
  const login = async (employeeNumber, password, router) => {
    try {
      // APIリクエストを実行
      const data = await loginRequest(employeeNumber, password);

      // ログイン成功時の状態更新
      setStaffName(data.staff_name);
      setStaffRole(data.role);
      console.log(data);

      // ロールに応じた画面遷移
      if (data.role.is_admin) {
        router.push("/admin"); // 管理者画面へ遷移
      } else if (data.role.is_manager) {
        router.push("/manager"); // マネージャー画面へ遷移
      } else {
        router.push("/staff"); // 一般スタッフ画面へ遷移
      }

      // データを返す (必要に応じて)
      return data;
    } catch (error) {
      console.error("ログイン失敗:", error);
      alert("ログインに失敗しました");
      throw error; // エラーを呼び出し元に伝える
    }
  };

  const logout = async () => {
    await logoutRequest();
    setStaffName("");
    setStaffRole("");
  };

  return { login, logout };
};
