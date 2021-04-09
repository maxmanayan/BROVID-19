class Frat < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :colleges, through: :events
end
