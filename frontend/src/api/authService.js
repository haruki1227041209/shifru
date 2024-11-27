import axiosClient from "./axiosClient";

export const login = async (employeeNumber, password) => {
  const response = await axiosClient.post("/login", {
    staff: {
      employee_number: employeeNumber,
      password,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.delete("/logout");
  return response.data;
};
