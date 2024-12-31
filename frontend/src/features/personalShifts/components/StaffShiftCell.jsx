const StaffShiftCell = ({ date, isToday }) => {
  return (
    <div
      key={`${date.year}-${date.month}-${date.day}`}
      className="border p-0.5 h-24 text-xs cursor-pointer flex flex-col justify-between"
    >
      <div
        className={`w-5 h-5 flex items-center justify-center ${
          isToday ? "text-blue-600 bg-blue-200 rounded-full" : ""
        }`}
      >
        {date.day}
      </div>

      <div className="text-[9px] text-center">
        <div>ランチ</div>
        <div>茅場町</div>
        <div>10:00</div>
        <div>23:00</div>
      </div>
    </div>
  );
};

export default StaffShiftCell;
