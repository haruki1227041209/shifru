class Staff < ApplicationRecord
  has_secure_password

  has_many :shifts, dependent: :destroy
  has_many :histories, dependent: :destroy
  belongs_to :store, optional: true
  has_one :area, through: :store
  has_many :staff_roles, dependent: :destroy
  has_many :roles, through: :staff_roles

  validates :name, presence: true
  validates :employee_number, presence: true, uniqueness: true
  validates :store_id, presence: true, unless: -> { is_admin }

  def manager_of?(store)
    is_manager && store.area == area
  end
end
