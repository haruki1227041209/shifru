export const generateDates = (year, month, isFirstHalf) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = isFirstHalf ? 1 : 16;
  const endDay = isFirstHalf ? 15 : daysInMonth;

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  return Array.from({ length: endDay - startDay + 1 }, (_, i) => {
    const day = i + startDay;
    const weekday = weekdays[new Date(year, month, day).getDay()];
    const paddedMonth = (month + 1).toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");
    return {
      year,
      month: month + 1,
      day,
      weekday,
      key: `${year}-${paddedMonth}-${paddedDay}`,
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

export const isModalAllowed = (date) => {
  const today = new Date(); // 今日の日付
  today.setHours(0, 0, 0, 0); // 今日の日付を 00:00:00 にリセットしないと締切日でモーダルが表示されない
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();

  const thisMonth10 = new Date(thisYear, thisMonth, 10); // 当月10日 特例！！！
  const thisMonth6 = new Date(thisYear, thisMonth, 6); // 当月6日
  const thisMonth20 = new Date(thisYear, thisMonth, 20); // 当月20日
  const thisMonth5 = new Date(thisYear, thisMonth, 5); // 当月5日
  const thisMonth21 = new Date(thisYear, thisMonth, 21); // 当月21日

  const targetDate = new Date(date.year, date.month - 1, date.day); // チェック対象の日付

  // 🟢 【特例】今だけ当月10日までは常にモーダル表示
  if (today <= thisMonth10) {
    return true;
  }

  // 1. 当月6日〜20日なら来月1日以降が入力可能
  if (today >= thisMonth6 && today <= thisMonth20) {
    const nextMonth1 = new Date(thisYear, thisMonth + 1, 1); // 来月1日
    return targetDate >= nextMonth1; // 来月1日以降ならモーダル表示
  }

  // 2. 当月5日以前なら当月15日以降が入力可能
  if (today <= thisMonth5) {
    const thisMonth15 = new Date(thisYear, thisMonth, 15); // 当月15日
    return targetDate >= thisMonth15; // 当月15日以降ならモーダル表示
  }

  // 3. 当月21日以降なら翌月15日以降が入力可能
  if (today >= thisMonth21) {
    const nextMonth15 = new Date(thisYear, thisMonth + 1, 15); // 翌月15日
    return targetDate >= nextMonth15; // 翌月15日以降ならモーダル表示
  }

  // 条件外はすべてモーダルなし
  return false;
};
