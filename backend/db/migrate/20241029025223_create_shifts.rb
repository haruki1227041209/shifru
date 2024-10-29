class CreateShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.references :staff, null: false, foreign_key: true
      t.references :store, null: false, foreign_key: true
      t.date :day, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.boolean :is_edit, default: false
      t.boolean :is_confirm, default: false
      t.timestamps
    end
  end
end
