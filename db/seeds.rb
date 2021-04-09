# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

Frat.destroy_all
College.destroy_all
Event.destroy_all

5.times do 
  @college = College.create(
    name: Faker::University.name,
    mascot: Faker::Team.mascot
  )
end


5.times do
  @frat = Frat.create(
    name: Faker::University.greek_organization,
    fav_beer: Faker::Beer.brand,
    member_count: Faker::Number.between(from: 30, to: 200)
  )

  5.times do |i|
    Event.create(
      name: Faker::Music::Rush.album,
      info: Faker::Quote.singular_siegler,
      date: Faker::Date.forward(days: 30),
      byob: Faker::Boolean.boolean,
      likes: Faker::Number.between(from: 1, to: 500),
      frat_id: @frat.id,
      college_id: (i + 1)
    )
  end

end



puts "Seeded #{Frat.all.size} new Frats"
puts "Seeded #{College.all.size} new Colleges"
puts "Seeded #{Event.all.size} new Events"