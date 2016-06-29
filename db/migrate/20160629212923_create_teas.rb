class CreateTeas < ActiveRecord::Migration
  def change
    create_table :teas do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :type, null: false
      t.string :region, null: false
      t.integer :steep_time, null: false
      t.integer :temperature, null: false
      t.integer :leaf_quantity, null: false
      t.integer :leaf_density, null: false
      t.boolean :retailer, null: false, default: false
      t.timestamps null: false
    end

    add_index :teas, :name, unique: true
    add_index :teas, :type
    add_index :teas, :region
  end
end
