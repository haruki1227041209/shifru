class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :name, null: false
      t.bigint :store_number, null: false, unique: true
      t.timestamps
    end

    add_index :stores, :store_number, unique: true
  end
end
