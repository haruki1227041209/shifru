import { DialogDescription } from "../ui/dialog";

const CurrentShift = ({ allShifts }) => {
  return (
    <div className="space-y-0">
      <DialogDescription>現在のシフト状況</DialogDescription>
      {allShifts?.length > 0 ? (
        allShifts.map((shift, index) => (
          <DialogDescription key={index}>
            {`${shift.staff_name} ${shift.start_time}~${shift.end_time === "23:45" ? "LAST" : shift.end_time}`}
          </DialogDescription>
        ))
      ) : (
        <DialogDescription>まだ誰も出してませーん</DialogDescription>
      )}
    </div>
  );
};

export default CurrentShift;
