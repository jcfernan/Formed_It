# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Patient.destroy_all

9.times do |i|
    Patient.create(
        name: "Patient #{i +1}",
        age: '45',
        weight: 175,
        height: 72,
        phonenumber: "(303) 457-5131",
        history: 'Healthy as a horse'
    )
end