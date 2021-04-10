class College < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :frats, through: :events

  def get_frats_with_event_info
    self.frats.map do |frat|
      name = frat.events.find_by(college_id: self.id).name
      info = frat.events.find_by(college_id: self.id).info
      date = frat.events.find_by(college_id: self.id).date
      byob = frat.events.find_by(college_id: self.id).byob
      likes = frat.events.find_by(college_id: self.id).likes
      {frat: frat, name: name, date: date, info: info, byob: byob, likes:likes }
    end
  end


  def get_unassociated_frats
    Frat.all - self.frats
  end
end
