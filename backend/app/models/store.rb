class Store < ApplicationRecord
  has_many :shifts, dependent: :destroy
  belongs_to :area
  has_many :staffs

  validates :name, presence: true
  validates :store_number, presence: true, uniqueness: true
end
