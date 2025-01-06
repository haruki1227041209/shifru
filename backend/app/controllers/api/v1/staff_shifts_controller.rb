class Api::V1::StaffShiftsController < ApplicationController
  before_action :authenticate_staff

  def index
    shifts = current_staff.shifts.includes(:store).order(day: :asc)

    render json: shifts.map { |shift|
      {
        id: shift.id,
        day: shift.day,
        start_time: shift.start_time.strftime("%H:%M"),
        end_time: shift.end_time.strftime("%H:%M"),
        store_name: shift.store.name,
        is_confirm: shift.is_confirm,
        is_edit: shift.is_edit
      }
    }, status: :ok
  end

  def bulk_upsert
    shifts_data = params[:shifts].map do |shift|
      {
        staff_id: current_staff.id,
        store_id: current_staff.store_id,
        day: shift[:day],
        start_time: shift[:start_time],
        end_time: shift[:end_time]
      }
    end

    invalid_shifts = shifts_data.reject do |data|
      Shift.new(data).valid?
    end

    if invalid_shifts.any?
      render json: { error: '無効なシフトデータが含まれています', details: invalid_shifts }, status: :unprocessable_entity
      return
    end

    begin
      Shift.transaction do
        Shift.upsert_all(shifts_data)
      end
      render json: { message: 'シフトが正常に保存されました' }, status: :ok
    rescue ActiveRecord::ActiveRecordError => e
      render json: { error: 'シフトの保存に失敗しました', details: e.message }, status: :unprocessable_entity
    end
  end

  def destroy
    shift = Shift.find_by(day: params[:id], staff_id: current_staff.id)
    if shift
      shift.destroy
      head :no_content
    else
      render json: { error: 'シフトが見つかりません' }, status: :not_found
    end
  end
end
