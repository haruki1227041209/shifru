import axiosClient from "./axiosClient";

export const getAreas = async () => {
  try {
    const response = await axiosClient.get("/areas");
    return response.data;
  } catch (error) {
    console.error("エリアの取得に失敗しました:", error);
    throw error;
  }
};

export const createArea = async (areaData) => {
  try {
    const response = await axiosClient.post("/areas", { area: areaData });
    return response.data;
  } catch (error) {
    console.error("エリアの作成に失敗しました:", error);
    throw error;
  }
};
