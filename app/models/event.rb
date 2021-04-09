class Event < ApplicationRecord
  belongs_to :frat
  belongs_to :college

  def self.with_colleges_frats
    events= Event.all
    events.map do |event|
      {id:event.id, name: event.name, date: event.date, info: event.info, byob: event.byob, likes: event.likes, college: event.college, frat: event.frat }
    end
  end
end
