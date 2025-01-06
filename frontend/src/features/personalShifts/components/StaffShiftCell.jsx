const StaffShiftCell = ({ date, isToday, shift, dateKey }) => {
  return (
    <div
      key={dateKey}
      className="border p-0.5 h-24 text-xs cursor-pointer flex flex-col justify-between"
    >
      <div
        className={`w-5 h-5 flex items-center justify-center ${
          isToday ? "text-blue-600 bg-blue-200 rounded-full" : ""
        }`}
      >
        {date.day}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {shift ? (
          <div className="text-[9px]">
            {/* <div>ランチ</div>
            <div>茅場町</div> */}
            <div>{shift.start_time}</div>
            <div>{shift.end_time === "23:45" ? "LAST" : shift.end_time}</div>
          </div>
        ) : (
          <div className="text-xl"> - </div>
        )}
      </div>
    </div>
  );
};

export default StaffShiftCell;
