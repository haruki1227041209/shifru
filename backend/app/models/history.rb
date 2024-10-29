class History < ApplicationRecord
  belongs_to :staff
  belongs_to :shift

  validates :shift_date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
