export const handleLogin = async (e, login, role, router) => {
  e.preventDefault();

  const employeeNumber = e.target.employee.value;
  const password = e.target.password.value;

  try {
    await login(employeeNumber, password);

    // console.log("ドキュメント:", document.cookie);

    // const role = document.cookie
    //   .split("; ")
    //   .find((row) => row.startsWith("role="))
    //   ?.split("=")[1];

    // console.log("Encoded Role:", role);

    // const decoded = decodeURIComponent(role);
    // console.log("Decoded Role:", decoded);

    // const parsedRole = decoded ? JSON.parse(decoded) : {};
    // console.log("Parsed Role:", parsedRole);

    // // const parsedRole = role ? JSON.parse(decodeURIComponent(role)) : {};
    // setRole(parsedRole);

    // console.log(parsedRole);
    console.log(role.is_admin);

    if (role.is_admin) {
      router.push("/admin");
    } else if (role.is_manager) {
      router.push("/manager");
    } else {
      router.push("/staff");
    }
  } catch (error) {
    console.error("ログイン失敗:", error);
    alert("ログインに失敗しました");
  }
};
