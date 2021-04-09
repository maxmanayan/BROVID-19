class Frat < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :colleges, through: :events

  def get_colleges_with_event_info
    self.colleges.map do |college|
      name = college.appointments.find_by(frat_id: self.id).name
      info = college.appointments.find_by(frat_id: self.id).info
      date = college.appointments.find_by(frat_id: self.id).date
      byob = college.appointments.find_by(frat_id: self.id).byob
      likes = college.appointments.find_by(frat_id: self.id).likes
      {college: college, date: date, info: info, byob: byob, likes:likes }
    end
  end


  def get_unassociated_colleges
    College.all - self.colleges
  end
end
