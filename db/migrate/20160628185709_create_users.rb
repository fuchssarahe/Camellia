class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :session_token, null: false, unique: true
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.timestamps null: false
    end

    add_index :users, :session_token, unique: true
    add_index :users, :username, unique: true
  end
end
