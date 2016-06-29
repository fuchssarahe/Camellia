class RemoveTypeFromTeas < ActiveRecord::Migration
  def change
    remove_column :teas, :type, :string
    add_column :teas, :tea_type, :string

  end
end
