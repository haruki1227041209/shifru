export const getFilteredDates = (dates, view) => {
  if (view === "firstHalf") {
    return dates.filter((date) => parseInt(date.split("-")[2], 10) <= 15);
  }
  if (view === "secondHalf") {
    return dates.filter((date) => parseInt(date.split("-")[2], 10) > 15);
  }
  return dates;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "2-digit", day: "2-digit" };
  return new Intl.DateTimeFormat("ja-JP", options).format(date);
};

export const getWeekday = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: "short" }; // 短縮された曜日（例: 月, 火）
  return new Intl.DateTimeFormat("ja-JP", options).format(date);
};
