class Shift < ApplicationRecord
  self.skip_time_zone_conversion_for_attributes = [:start_time, :end_time]

  belongs_to :staff
  belongs_to :store
  has_one :history, dependent: :destroy

  validates :day, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
