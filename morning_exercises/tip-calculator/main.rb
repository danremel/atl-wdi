# asking for subtotal
puts "Please enter subtotal."
subtotal = gets.chomp
# meal_with_tax = subtotal + tax_value
tax_value = (8/100)
meal_with_tax = (subtotal.to_f + tax_value)

puts "How many people are eating?"
number_of_people = gets.chomp

puts "How much would you like to tip?"
puts "A) 15%"
puts "B) 18%"
puts "C) 20%"
puts "D) 0%"
option = gets.chomp
puts "You've chosen option #{option}"

if option.upcase == 'A'
    tip_percent = 15
elsif option.upcase == 'B'
    tip_percent = 18
elsif option.upcase == 'C'
    tip_percent = 20
end

tip_value = meal_with_tax * tip_percent/100
puts "Your tip is: $#{tip_value}"
divided_tip = tip_value / number_of_people.to_i
puts "That means each person owes $#{divided_tip}"
total = meal_with_tax + tip_value.to_f
puts "Your total plus tax = $#{total}"