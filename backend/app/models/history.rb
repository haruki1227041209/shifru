class History < ApplicationRecord
  self.skip_time_zone_conversion_for_attributes = [:start_time, :end_time]

  belongs_to :staff
  belongs_to :shift

  validates :shift_date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
