# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.delete_all

Bench.create!(
  description: "No shade.",
  lat: 37.769441,
  lng: -122.432945
)

Bench.create!(
  description: "Crowded but nice view.",
  lat: 37.794752,
  lng: -122.392429
)

Bench.create!(
  description: "In the middle of the park.",
  lat: 37.792173,
  lng: -122.412169
)
