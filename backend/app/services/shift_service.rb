class ShiftService
  def self.fetch_all_shifts
    shifts = Shift.where(is_confirm: true, is_edit: false).includes(:staff).map do |shift|
      {
        shift_id: shift.id,
        store_id: shift.store_id,
        day: shift.day,
        start_time: shift.start_time.strftime("%H:%M"),
        end_time: shift.end_time.strftime("%H:%M"),
        is_confirm: shift.is_confirm,
        is_edit: shift.is_edit,
        staff_id: shift.staff.id,
        staff_name: shift.staff.name
      }
    end

    edited_shifts = Shift.where(is_confirm: true, is_edit: true).includes(:staff).map do |shift|
      history = History.find_by(shift_id: shift.id)
      if history
        {
          shift_id: shift.id,
          store_id: shift.store_id,
          day: shift.day,
          start_time: history.start_time.strftime("%H:%M"),
          end_time: history.end_time.strftime("%H:%M"),
          is_confirm: shift.is_confirm,
          is_edit: shift.is_edit,
          staff_id: shift.staff.id,
          staff_name: shift.staff.name
        }
      else
        {
          shift_id: shift.id,
          store_id: shift.store_id,
          day: shift.day,
          start_time: shift.start_time.strftime("%H:%M"),
          end_time: shift.end_time.strftime("%H:%M"),
          is_confirm: shift.is_confirm,
          is_edit: shift.is_edit,
          staff_id: shift.staff.id,
          staff_name: shift.staff.name
        }
      end
    end

    # すべてHash形式になってるよ
    shifts + edited_shifts
  end
end
