import axiosClient from "./axiosClient";

export const getStaffShifts = async () => {
  const response = await axiosClient.get("/staff_shifts");
  const shifts = response.data;

  const shiftMap = shifts.reduce((map, shift) => {
    map[shift.day] = shift;
    return map;
  }, {});

  return shiftMap;
};

// 単一も複数も対応可
export const saveShifts = async (shifts) => {
  try {
    const payload = Array.isArray(shifts) ? shifts : [shifts];
    const response = await axiosClient.post("/staff_shifts/bulk_upsert", {
      shifts: payload,
    });

    return response.data;
  } catch (error) {
    console.error("シフトの保存に失敗しました:", error);
    throw error;
  }
};

export const deleteShift = async (dateKey) => {
  try {
    const response = await axiosClient.delete(`/staff_shifts/${dateKey}`);
    return response.data;
  } catch (error) {
    console.error("シフトの削除に失敗しました:", error);
    throw error;
  }
};
