class AddNullFalseToRetailer < ActiveRecord::Migration
  def change
    change_column :teas, :retailer, :string, null: false
  end
end
