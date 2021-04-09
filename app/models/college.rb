class College < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :frats, through: :events
end
