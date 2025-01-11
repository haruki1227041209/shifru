import axiosClient from "./axiosClient";

export const getStaffs = async () => {
  try {
    const response = await axiosClient.get("/staffs");
    return response.data;
  } catch (error) {
    console.error("スタッフの取得に失敗しました:", error);
    throw error;
  }
};

export const createStaff = async (staffData) => {
  try {
    const response = await axiosClient.post("/staffs", { staff: staffData });
    return response.data;
  } catch (error) {
    console.error("スタッフの作成に失敗しました:", error);
    throw error;
  }
};
