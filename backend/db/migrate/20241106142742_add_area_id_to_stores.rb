class AddAreaIdToStores < ActiveRecord::Migration[7.0]
  def change
    add_column :stores, :area_id, :bigint, null: false
    add_index :stores, :area_id
    add_foreign_key :stores, :areas
  end
end

class AddAreaIdToStores < ActiveRecord::Migration[7.0]
  def change
    add_reference :stores, :area, foreign_key: true, null: false
  end
end
