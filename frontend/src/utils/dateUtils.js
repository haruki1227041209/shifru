export const formatDateKey = (year, month, day) => {
  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");
  return `${year}-${paddedMonth}-${paddedDay}`;
};
