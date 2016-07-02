class AddImageToTeas < ActiveRecord::Migration
  def change
    add_column :teas, :image_public_id, :string

  end
end
