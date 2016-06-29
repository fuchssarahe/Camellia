# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160629223905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "teas", force: :cascade do |t|
    t.string   "name",          null: false
    t.text     "description",   null: false
    t.string   "region",        null: false
    t.integer  "steep_time",    null: false
    t.integer  "temperature",   null: false
    t.integer  "leaf_quantity", null: false
    t.integer  "leaf_density",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "tea_type",      null: false
    t.string   "retailer",      null: false
  end

  add_index "teas", ["name"], name: "index_teas_on_name", unique: true, using: :btree
  add_index "teas", ["region"], name: "index_teas_on_region", using: :btree
  add_index "teas", ["tea_type"], name: "index_teas_on_tea_type", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "session_token",   null: false
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
