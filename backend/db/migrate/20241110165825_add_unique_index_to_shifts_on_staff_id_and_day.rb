class AddUniqueIndexToShiftsOnStaffIdAndDay < ActiveRecord::Migration[7.0]
  def change
    add_index :shifts, [:staff_id, :day], unique: true
  end
end
