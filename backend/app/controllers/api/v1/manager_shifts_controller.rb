class Api::V1::ManagerShiftsController < ApplicationController
  before_action :authenticate_staff
  before_action :authorize_admin_or_manager
  before_action :set_shift, only: [:update_time]

  def index
    all_shifts = ShiftService.fetch_all_shifts

    formatted_shifts = ShiftSerializer.serialize(all_shifts)

    render json: formatted_shifts, status: :ok
  end

  def bulk_unregister
    shift_ids = params[:shift_ids] || []

    Shift.transaction do
      Shift.where(id: shift_ids).update_all(is_confirm: false)
    end

    render json: { message: '指定されたシフトが登録解除されました' }, status: :ok
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: 'シフトの登録解除に失敗しました', details: e.message }, status: :unprocessable_entity
  end

  def update_time
    if @shift.is_edit
      history = History.find_by(shift_id: @shift.id)
      if history.update(start_time: params[:new_start_time], end_time: params[:new_end_time])
        render json: history, status: :ok
      else
        render json: { errors: history.errors.full_messages }, status: :unprocessable_entity
      end
    elsif @shift.update(is_edit: true)
      create_history(@shift, params[:new_start_time], params[:new_end_time])
      render json: @shift, status: :ok
    else
      render json: { errors: @shift.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_shift
    @shift = Shift.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'シフトが見つかりません' }, status: :not_found
  end

  def create_history(shift, new_start_time, new_end_time)
    History.create!(
      staff_id: current_staff.id,
      shift_id: shift.id,
      shift_date: shift.day,
      start_time: new_start_time,
      end_time: new_end_time
    )
  end
end
