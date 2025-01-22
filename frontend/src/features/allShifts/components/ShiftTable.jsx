import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AllShiftsCell from "./AllShiftsCell";

const ShiftTable = ({ calendarDates, allShifts }) => {
  return (
    <Table className="table-auto border-separate border-spacing-0 border-gray-300">
      <TableHeader>
        <TableRow className="">
          <TableCell className="sticky left-0 z-10">ランチ</TableCell>
        </TableRow>
      </TableHeader>
      <AllShiftsCell
        calendarDates={calendarDates}
        allShifts={allShifts}
        type="lunch"
      />
      <TableHeader>
        <TableRow className="">
          <TableCell className="sticky left-0 z-10">ディナー</TableCell>
        </TableRow>
      </TableHeader>
      <AllShiftsCell
        calendarDates={calendarDates}
        allShifts={allShifts}
        type="dinner"
      />
    </Table>
  );
};

export default ShiftTable;
