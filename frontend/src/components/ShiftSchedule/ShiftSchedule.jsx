"use client";

import React, { useState, useEffect } from "react";
import styles from "./ShiftSchedule.module.css";
import axiosClient from "@/api/axiosClient";
import ShiftTable from "./ShiftTable";

const ShiftSchedule = () => {
  const [shifts, setShifts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("firstHalf"); // 初期表示は前半

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axiosClient.get("/manager_shifts");
        setShifts(response.data);
      } catch (err) {
        console.error("Error fetching shifts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました: {error}</div>;

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className={styles.shiftSchedule}>
      <h1>シフトスケジュール</h1>
      <div className={styles.viewSelector}>
        <button
          onClick={() => handleViewChange("firstHalf")}
          className={view === "firstHalf" ? styles.active : ""}
        >
          前半（1日〜15日）
        </button>
        <button
          onClick={() => handleViewChange("secondHalf")}
          className={view === "secondHalf" ? styles.active : ""}
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

export default ShiftSchedule;
