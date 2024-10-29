class StaffRole < ApplicationRecord
  belongs_to :staff
  belongs_to :role
end
