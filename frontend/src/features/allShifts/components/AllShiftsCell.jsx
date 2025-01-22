import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AllShiftsCell = ({ calendarDates, allShifts, type }) => {
  return (
    <>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="border border-gray-300 whitespace-nowrap sticky left-0 bg-gray-100 z-10">
            スタッフ名
          </TableHead>
          {calendarDates.map((date, index) => (
            <TableHead
              key={index}
              className="border border-gray-300 text-center"
            >
              {date.day}({date.weekday})
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {Object.entries(allShifts)
          .filter(([_, staffShifts]) => {
            // 表示期間に該当するシフトが存在するか確認
            const shiftsType = staffShifts[type];
            return calendarDates.some((date) =>
              shiftsType.some((shift) => shift.day === date.key)
            );
          })
          .map(([staffName, staffShifts], rowIndex) => (
            <>
              <TableRow key={rowIndex} className="hover:bg-gray-300">
                <TableCell className="border border-gray-300 whitespace-nowrap sticky left-0 bg-white z-10">
                  {staffName}
                </TableCell>
                {calendarDates.map((date, colIndex) => {
                  const shiftsType = staffShifts[type];

                  const shift = shiftsType.find(
                    (shift) => shift.day === date.key
                  );

                  return (
                    <TableCell
                      key={colIndex}
                      className="border border-gray-300 text-center hover:bg-gray-400"
                    >
                      {
                        shift ? (
                          type === "lunch" ? (
                            // ランチの場合の表示条件
                            shift.end_time < "16:00" ? (
                              <>
                                {shift.start_time}
                                <br />
                                {shift.end_time}
                              </>
                            ) : (
                              `${shift.start_time}`
                            )
                          ) : // ディナーの場合の表示条件
                          shift.end_time < "23:45" ? (
                            <>
                              {shift.start_time}
                              <br />
                              {shift.end_time}
                            </>
                          ) : (
                            `${shift.start_time}`
                          )
                        ) : (
                          "-"
                        ) // シフトがない場合
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            </>
          ))}
        {[...Array(3)].map((_, rowIndex) => (
          <TableRow key={rowIndex + 100} className="hover:bg-gray-300">
            <TableCell className="border border-gray-300 whitespace-nowrap sticky left-0 bg-white z-10">
              {rowIndex === 0 ? (
                "ヘルプ"
              ) : (
                <span className="opacity-0">あ</span>
              )}
            </TableCell>
            {calendarDates.map((date, colIndex) => (
              <TableCell
                key={colIndex}
                className="border border-gray-300 text-center hover:bg-gray-400"
              ></TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default AllShiftsCell;
