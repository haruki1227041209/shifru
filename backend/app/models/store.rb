class Store < ApplicationRecord
  has_many :shifts, dependent: :destroy
  has_many :staff_stores, dependent: :destroy
  has_many :staffs, through: :staff_stores

  validates :name, presence: true
  validates :store_number, presence: true, uniqueness: true
end
