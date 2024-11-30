class ShiftSerializer
  def self.serialize(all_shifts)
    grouped_shifts = all_shifts.group_by { |shift| shift[:staff_name] }

    grouped_shifts.transform_values do |shifts|
      shifts.map do |shift|
        {
          shift_id: shift[:shift_id],
          staff_id: shift[:staff_id],
          store_id: shift[:store_id],
          day: shift[:day],
          start_time: shift[:start_time],
          end_time: shift[:end_time],
          is_confirm: shift[:is_confirm],
          is_edit: shift[:is_edit]
        }
      end
    end
  end
end
