const StaffShiftCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div>
      <h1>{`${year}年${month + 1}月`}</h1>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((weekday) => (
          <div key={weekday} className="font-bold p-2">
            {weekday}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-left">
        {/* 空白セルを追加 */}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="p-1 h-24" />
        ))}

        {/* 日付セルを追加 */}
        {dates.map((date) => (
          <div
            key={date}
            className="border p-1 h-24 overflow-y-auto cursor-pointer"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffShiftCalendar;
