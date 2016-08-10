class CreateSippings < ActiveRecord::Migration
  def change
    create_table :sippings do |t|
      t.integer :user_id, null: false
      t.integer :tea_id, null: false
      t.timestamps null: false
    end

    add_index :sippings, :user_id
    add_index :sippings, :tea_id
  end
end
