class Staff < ApplicationRecord
  has_secure_password

  has_many :shifts, dependent: :destroy
  has_many :histories, dependent: :destroy
  has_many :staff_stores, dependent: :destroy
  has_many :stores, through: :staff_stores
  has_many :staff_roles, dependent: :destroy
  has_many :roles, through: :staff_roles

  validates :name, presence: true
  validates :employee_number, presence: true, uniqueness: true
end
