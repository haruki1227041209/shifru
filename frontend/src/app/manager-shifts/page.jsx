"use client";

import React, { useState, useEffect } from "react";
import "./ShiftSchedule.css";
import axiosClient from "@/api/axiosClient";

const ShiftSchedule = () => {
  const [shifts, setShifts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("firstHalf"); // 初期表示は前半

  // データ取得処理
  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axiosClient.get("/manager_shifts"); // バックエンドからデータ取得
        setShifts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shifts:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました: {error}</div>;

  const handleViewChange = (newView) => {
    setView(newView); // 表示範囲を切り替え
  };

  return (
    <div className="shift-schedule">
      <h1>シフトスケジュール</h1>
      <div className="view-selector">
        <button
          onClick={() => handleViewChange("firstHalf")}
          className={view === "firstHalf" ? "active" : ""}
        >
          前半（1日〜15日）
        </button>
        <button
          onClick={() => handleViewChange("secondHalf")}
          className={view === "secondHalf" ? "active" : ""}
        >
          後半（16日〜月末）
        </button>
      </div>
      <h2>ランチ</h2>
      <ShiftTable shifts={shifts} period="lunch" view={view} />
      <h2>ディナー</h2>
      <ShiftTable shifts={shifts} period="dinner" view={view} />
    </div>
  );
};

const ShiftTable = ({ shifts, period, view }) => {
  // 日付を前半と後半に分ける
  const getFilteredDates = (dates) => {
    if (view === "firstHalf") {
      return dates.filter((date) => parseInt(date.split("-")[2], 10) <= 15);
    }
    if (view === "secondHalf") {
      return dates.filter((date) => parseInt(date.split("-")[2], 10) > 15);
    }
    return dates;
  };

  // 日付をフォーマットする関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("ja-JP", options).format(date);
  };

  // 曜日を取得する関数
  const getWeekday = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "short" }; // 短縮された曜日（例: 月, 火）
    return new Intl.DateTimeFormat("ja-JP", options).format(date);
  };

  // 全ての日付を抽出し、ソートしてからフィルタリング
  const allDates = Array.from(
    new Set(
      Object.values(shifts).flatMap((shift) => shift[period].map((s) => s.day))
    )
  ).sort();
  const dates = getFilteredDates(allDates);

  // 該当期間に出勤があるスタッフのみをフィルタ
  const filteredShifts = Object.entries(shifts).filter(
    ([staffName, staffShifts]) => {
      return (
        staffShifts[period] &&
        staffShifts[period].some((s) => dates.includes(s.day))
      );
    }
  );

  return (
    <table className="shift-table">
      <thead>
        <tr>
          <th>スタッフ名</th>
          {dates.map((date) => (
            <th key={date}>
              {formatDate(date)}
              <br />
              <span className="weekday">{getWeekday(date)}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredShifts.map(([staffName, staffShifts]) => (
          <tr key={staffName}>
            <td>{staffName}</td>
            {dates.map((date) => {
              const shift = staffShifts[period].find((s) => s.day === date);
              return (
                <td key={date} className="shift-cell">
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

export default ShiftSchedule;
