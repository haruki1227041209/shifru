class ChangeIsConfirmDefaultOnShifts < ActiveRecord::Migration[7.0]
  def change
    change_column_default :shifts, :is_confirm, from: false, to: true
  end
end
