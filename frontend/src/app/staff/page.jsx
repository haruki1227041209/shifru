"use client";

import { useEffect, useState } from "react";
import { getStaffShifts } from "@/api/staffShiftService";
import useAuthorization from "@/hooks/useAuthorization";

const StaffShiftsPage = () => {
  useAuthorization("staff");

  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const data = await getStaffShifts();
        setShifts(data);
      } catch (error) {
        console.error("シフト一覧の取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div>
      <h1>シフト一覧</h1>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>開始時間</th>
            <th>終了時間</th>
            <th>店舗名</th>
            <th>確定済み</th>
            <th>編集済み</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.day}</td>
              <td>{shift.start_time}</td>
              <td>{shift.end_time}</td>
              <td>{shift.store_name}</td>
              <td>{shift.is_confirm ? "✔️" : "✖️"}</td>
              <td>{shift.is_edit ? "✔️" : "✖️"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffShiftsPage;
