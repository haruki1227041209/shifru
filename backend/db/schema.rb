# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_11_11_063126) do
  create_table "areas", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "histories", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "staff_id", null: false
    t.bigint "shift_id", null: false
    t.date "shift_date", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shift_id"], name: "index_histories_on_shift_id"
    t.index ["staff_id"], name: "index_histories_on_staff_id"
  end

  create_table "roles", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shifts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "staff_id", null: false
    t.bigint "store_id", null: false
    t.date "day", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.boolean "is_edit", default: false
    t.boolean "is_confirm", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["staff_id", "day"], name: "index_shifts_on_staff_id_and_day", unique: true
    t.index ["staff_id"], name: "index_shifts_on_staff_id"
    t.index ["store_id"], name: "index_shifts_on_store_id"
  end

  create_table "staff_roles", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "staff_id", null: false
    t.bigint "role_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id"], name: "index_staff_roles_on_role_id"
    t.index ["staff_id"], name: "index_staff_roles_on_staff_id"
  end

  create_table "staffs", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "employee_number", null: false
    t.string "password_digest", null: false
    t.boolean "is_manager", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "store_id"
    t.boolean "is_admin", default: false
    t.index ["employee_number"], name: "index_staffs_on_employee_number", unique: true
    t.index ["store_id"], name: "index_staffs_on_store_id"
  end

  create_table "stores", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "store_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "area_id"
    t.index ["store_number"], name: "index_stores_on_store_number", unique: true
  end

  add_foreign_key "histories", "shifts"
  add_foreign_key "histories", "staffs"
  add_foreign_key "shifts", "staffs"
  add_foreign_key "shifts", "stores"
  add_foreign_key "staff_roles", "roles"
  add_foreign_key "staff_roles", "staffs"
end
