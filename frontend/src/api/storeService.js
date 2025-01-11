import axiosClient from "./axiosClient";

export const getStores = async () => {
  try {
    const response = await axiosClient.get("/stores");
    return response.data;
  } catch (error) {
    console.error("店舗の取得に失敗しました:", error);
    throw error;
  }
};

export const createShop = async (storeData) => {
  try {
    const response = await axiosClient.post("/stores", { store: storeData });
    return response.data;
  } catch (error) {
    console.error("店舗の作成に失敗しました:", error);
    throw error;
  }
};
