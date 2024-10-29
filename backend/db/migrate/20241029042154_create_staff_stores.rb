class CreateStaffStores < ActiveRecord::Migration[7.0]
  def change
    create_table :staff_stores do |t|
      t.references :staff, null: false, foreign_key: true
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
