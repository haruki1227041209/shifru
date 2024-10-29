class Role < ApplicationRecord
  has_many :staff_roles, dependent: :destroy
  has_many :staffs, through: :staff_roles

  validates :name, presence: true
end
