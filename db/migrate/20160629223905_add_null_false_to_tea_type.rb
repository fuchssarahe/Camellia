class AddNullFalseToTeaType < ActiveRecord::Migration
  def change

    change_column :teas, :tea_type, :string, null: false
    add_index :teas, :tea_type
  end
end
