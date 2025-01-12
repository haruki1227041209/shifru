import axiosClient from "./axiosClient";

export const loginRequest = async (employeeNumber, password) => {
  const response = await axiosClient.post("/login", {
    staff: {
      employee_number: employeeNumber,
      password,
    },
  });
  const token = response.data.token;
  localStorage.setItem("access_token", token);
  return response.data;
};

export const logoutRequest = async () => {
  const response = await axiosClient.delete("/logout");
  return response.data;
};
