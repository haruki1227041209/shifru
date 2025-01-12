import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ShiftTable = ({}) => {
  const staff = [
    { id: 1, name: "チンキ" },
    { id: 2, name: "大塚" },
    { id: 3, name: "小林" },
  ];
  const shifts = {
    1: { 1: "10:00", 2: "11:00" },
    2: { 2: "12:00", 3: "13:00" },
    3: { 1: "14:00", 3: "15:00" },
  };
  const dates = Array.from({ length: 15 }, (_, i) => {
    const date = new Date(2025, 0, i + 1);
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    return {
      day: `${i + 1}`,
      weekday: weekdays[date.getDay()],
    };
  });
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>スタッフ名</TableHead>
            {dates.map((date, index) => (
              <TableHead key={index} className="text-center">
                {date.day} ({date.weekday})
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {staff.map((person, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{person.name}</TableCell>
              {dates.map((date, colIndex) => (
                <TableCell key={colIndex} className="text-center">
                  {shifts[person.id]?.[date.day] || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShiftTable;
