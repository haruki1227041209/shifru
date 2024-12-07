import React from "react";
import { formatDate, getWeekday, getFilteredDates } from "./utils";
import styles from "./ShiftSchedule.module.css";

const ShiftTable = ({ shifts, period, view }) => {
  const allDates = Array.from(
    new Set(
      Object.values(shifts).flatMap((shift) => shift[period]?.map((s) => s.day))
    )
  ).sort();

  const dates = getFilteredDates(allDates, view);

  const filteredShifts = Object.entries(shifts).filter(([_, staffShifts]) =>
    staffShifts[period]?.some((s) => dates.includes(s.day))
  );

  return (
    <table className={styles.shiftTable}>
      <thead>
        <tr>
          <th>スタッフ名</th>
          {dates.map((date) => (
            <th key={date}>
              {formatDate(date)}
              <br />
              <span className={styles.weekday}>{getWeekday(date)}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredShifts.map(([staffName, staffShifts]) => (
          <tr key={staffName}>
            <td>{staffName}</td>
            {dates.map((date) => {
              const shift = staffShifts[period]?.find((s) => s.day === date);
              return (
                <td key={date} className={styles.shiftCell}>
                  {shift ? shift.start_time : "-"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShiftTable;
