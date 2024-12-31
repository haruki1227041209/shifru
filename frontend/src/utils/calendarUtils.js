export const generateDates = (year, month, isFirstHalf) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = isFirstHalf ? 1 : 16;
  const endDay = isFirstHalf ? 15 : daysInMonth;

  return Array.from({ length: endDay - startDay + 1 }, (_, i) => {
    const day = i + startDay;
    return {
      year,
      month: month + 1,
      day,
    };
  });
};

export const isToday = (date, today = new Date()) => {
  return (
    date.day === today.getDate() &&
    date.month === today.getMonth() + 1 &&
    date.year === today.getFullYear()
  );
};
