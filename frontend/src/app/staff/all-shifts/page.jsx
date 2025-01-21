"use client";

import useAuthorization from "@/hooks/useAuthorization";
import AllShiftsCalendar from "@/features/allShifts/components/AllShiftsCalendar";

const AllShiftsPage = () => {
  useAuthorization("staff");

  const allShifts = {
    "大塚 春希": {
      lunch: [
        {
          shift_id: 50,
          staff_id: 5,
          day: "2024-11-01",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 51,
          staff_id: 5,
          day: "2024-11-07",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 52,
          staff_id: 5,
          day: "2024-11-14",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 53,
          staff_id: 5,
          day: "2024-11-15",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 54,
          staff_id: 5,
          day: "2024-11-21",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 55,
          staff_id: 5,
          day: "2024-11-22",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 56,
          staff_id: 5,
          day: "2024-11-28",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 57,
          staff_id: 5,
          day: "2024-11-29",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 172,
          staff_id: 5,
          day: "2024-11-05",
          start_time: "10:30",
          end_time: "16:00",
        },
        {
          shift_id: 178,
          staff_id: 5,
          day: "2025-02-01",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 179,
          staff_id: 5,
          day: "2025-02-02",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 180,
          staff_id: 5,
          day: "2025-02-03",
          start_time: "10:00",
          end_time: "16:00",
        },
        {
          shift_id: 181,
          staff_id: 5,
          day: "2025-02-06",
          start_time: "10:00",
          end_time: "16:00",
        },
      ],
      dinner: [
        {
          shift_id: 50,
          staff_id: 5,
          day: "2024-11-01",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 51,
          staff_id: 5,
          day: "2024-11-07",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 52,
          staff_id: 5,
          day: "2024-11-14",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 53,
          staff_id: 5,
          day: "2024-11-15",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 54,
          staff_id: 5,
          day: "2024-11-21",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 55,
          staff_id: 5,
          day: "2024-11-22",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 56,
          staff_id: 5,
          day: "2024-11-28",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 57,
          staff_id: 5,
          day: "2024-11-29",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 178,
          staff_id: 5,
          day: "2025-02-01",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 179,
          staff_id: 5,
          day: "2025-02-02",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 180,
          staff_id: 5,
          day: "2025-02-03",
          start_time: "17:00",
          end_time: "23:30",
        },
        {
          shift_id: 181,
          staff_id: 5,
          day: "2025-02-06",
          start_time: "17:00",
          end_time: "23:30",
        },
      ],
    },
  };

  return (
    <>
      <AllShiftsCalendar allShifts={allShifts} />
    </>
  );
};

export default AllShiftsPage;
