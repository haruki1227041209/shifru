class ShiftSerializer
  def self.serialize(all_shifts)
    grouped_shifts = all_shifts.group_by { |shift| shift[:staff_name] }

    grouped_shifts.transform_values do |shifts|
      {
        lunch: shifts.select { |shift| shift[:period] == "lunch" }.map do |shift|
          {
            shift_id: shift[:shift_id],
            staff_id: shift[:staff_id],
            day: shift[:day],
            start_time: shift[:start_time],
            end_time: shift[:end_time]
          }
        end,
        dinner: shifts.select { |shift| shift[:period] == "dinner" }.map do |shift|
          {
            shift_id: shift[:shift_id],
            staff_id: shift[:staff_id],
            day: shift[:day],
            start_time: shift[:start_time],
            end_time: shift[:end_time]
          }
        end
      }
    end
  end
end
