export const handleLogin = async (e, login, setRole, router) => {
  e.preventDefault();

  const employeeNumber = e.target.employee.value;
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
