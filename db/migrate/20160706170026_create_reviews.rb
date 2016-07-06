class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.string :tea_id, null: false
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :steep_time
      t.integer :leaf_quantity
      t.integer :temperature
      t.integer :leaf_density
      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :tea_id
    add_index :reviews, [:tea_id, :user_id], unique: true
  end
end
