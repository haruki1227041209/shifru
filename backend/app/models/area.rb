class Area < ApplicationRecord
  has_many :stores
  has_many :staffs, through: :stores
end
