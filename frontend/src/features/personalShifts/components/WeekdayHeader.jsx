const WeekdayHeader = () => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className="grid grid-cols-7 gap-0.5 text-center">
      {weekdays.map((weekday) => (
        <div key={weekday} className="text-xs font-bold p-2">
          {weekday}
        </div>
      ))}
    </div>
  );
};

export default WeekdayHeader;
