import * as React from "react";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 pr-10 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          type === "time" &&
            "[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0",
          className
        )}
        ref={ref}
        {...props}
      />
      {type === "time" && (
        <Clock
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={16}
        />
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
