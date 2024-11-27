import axiosClient from "./axiosClient";

export const getStaffShifts = async () => {
  const response = await axiosClient.get("/staff_shifts");
  console.log("呼んでる");
  return response.data;
};
