import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 矢印アイコン
import { Button } from "@/components/ui/button";

const CalendarNavigation = ({ onPrevious, onNext }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* 前へボタン */}
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-gray-100"
        onClick={onPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* 月表示 */}
      <h1 className="text-lg font-bold">{/* 年月を表示 */}</h1>

      {/* 次へボタン */}
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-gray-100"
        onClick={onNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default CalendarNavigation;
