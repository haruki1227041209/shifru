class CreateStaffs < ActiveRecord::Migration[7.0]
  def change
    create_table :staffs do |t|
      t.string :name, null: false
      t.bigint :employee_number, null: false, unique: true
      t.string :password_digest, null: false
      t.boolean :is_manager, default: false
      t.timestamps
    end

    add_index :staffs, :employee_number, unique: true
  end
end
