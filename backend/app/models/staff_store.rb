class StaffStore < ApplicationRecord
  belongs_to :staff
  belongs_to :store
end
