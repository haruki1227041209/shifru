"use client";

import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { roleAtom } from "@/atoms/authAtom";
import { useLogin } from "@/hooks/useLogin";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useLogin();
  const setRole = useSetAtom(roleAtom);

  const handleLogin = async (e) => {
    e.preventDefault();
    const employeeNumber = e.target.employeeNumber.value;
    const password = e.target.password.value;

    try {
      await login(employeeNumber, password);

      const role = document.cookie
        .split("; ")
        .find((row) => row.startsWith("role="))
        ?.split("=")[1];

      const parsedRole = role ? JSON.parse(decodeURIComponent(role)) : {};
      setRole(parsedRole);

      console.log(parsedRole);

      if (parsedRole.is_admin) {
        router.push("/admin");
      } else if (parsedRole.is_manager) {
        router.push("/manager");
      } else {
        router.push("/staff");
      }
    } catch (error) {
      console.error("ログイン失敗:", error);
      alert("ログインに失敗しました");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>ログイン</h1>
      <input name="employeeNumber" placeholder="従業員番号" required />
      <input
        type="password"
        name="password"
        placeholder="パスワード"
        required
      />
      <button type="submit">ログイン</button>
    </form>
  );
};

export default LoginPage;
