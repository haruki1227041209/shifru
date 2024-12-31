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
