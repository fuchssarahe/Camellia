class ChangeRetailerFromBoolean < ActiveRecord::Migration
  def change
    remove_column :teas, :retailer, :boolean
    add_column :teas, :retailer, :string

  end
end
