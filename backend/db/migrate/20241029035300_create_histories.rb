class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.references :staff, null: false, foreign_key: true
      t.references :shift, null: false, foreign_key: true
      t.date :shift_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.timestamps
    end
  end
end

