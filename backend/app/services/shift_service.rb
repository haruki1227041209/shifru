class ShiftService
  # Time型に合わせる
  LUNCH_START = Time.parse("10:00").change(year: 2000, month: 1, day: 1)
  LUNCH_END = Time.parse("16:00").change(year: 2000, month: 1, day: 1)
  DINNER_START = Time.parse("17:00").change(year: 2000, month: 1, day: 1)
  DINNER_END = Time.parse("23:30").change(year: 2000, month: 1, day: 1)

  def self.fetch_all_shifts(current_staff)
    shifts = Shift.where(is_confirm: true, is_edit: false, store_id: current_staff.store_id).includes(:staff).map do |shift|
      separate_shift(shift, shift.start_time, shift.end_time)
    end

    edited_shifts = Shift.where(is_confirm: true, is_edit: true).includes(:staff).map do |shift|
      history = History.find_by(shift_id: shift.id)
      if history
        separate_shift(shift, history.start_time, history.end_time)
      else
        separate_shift(shift, shift.start_time, shift.end_time)
      end
    end

    (shifts + edited_shifts).flatten
  end

  private

  def self.separate_shift(shift, start_time, end_time)
    result = []

    if start_time < LUNCH_END && end_time > LUNCH_START
      result << {
        shift_id: shift.id,
        staff_id: shift.staff.id,
        staff_name: shift.staff.name,
        day: shift.day,
        period: "lunch",
        start_time: [start_time, LUNCH_START].max.strftime("%H:%M"),
        end_time: [end_time, LUNCH_END].min.strftime("%H:%M")
      }
    end

    if start_time < DINNER_END && end_time > DINNER_START
      result << {
        shift_id: shift.id,
        staff_id: shift.staff.id,
        staff_name: shift.staff.name,
        day: shift.day,
        period: "dinner",
        start_time: [start_time, DINNER_START].max.strftime("%H:%M"),
        end_time: [end_time, DINNER_END].min.strftime("%H:%M")
      }
    end

    result
  end
end
