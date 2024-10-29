class Shift < ApplicationRecord
  belongs_to :staff
  belongs_to :store
  has_one :history, dependent: :destroy

  validates :day, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
