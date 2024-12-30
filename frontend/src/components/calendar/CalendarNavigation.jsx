import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendarNavigation = ({ onPrevious, onNext, title }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-gray-100"
        onClick={onPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <h1 className="text-sm font-bold">{title}</h1>

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
