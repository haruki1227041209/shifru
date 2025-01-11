import axiosClient from "./axiosClient";

export const createArea = async (areaData) => {
  try {
    const response = await axiosClient.post("/areas", { area: areaData });
    return response.data;
  } catch (error) {
    console.error("エリアの作成に失敗しました:", error);
    throw error;
  }
};
