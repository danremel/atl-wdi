//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
// - Find the cost of a small barrel:
//   - We know 1 small barrel costs 60 right off the bat
	const smallCost = 60;
// - Find the cost of the large barrel:
//   - First find the cost of all large barrels
//     - To do that, grab the total cost (825)
	const totalCost = 825;
//       - calculate the small barrels total price (2 * 60 = 120)
	const allSmallCost = (smallCost * 2);
//     - Subtract the small barrels from the total
//     - The remainder amount is the total cost of large barrels
	const allLargeCost = (totalCost - allSmallCost);
//     - Divide total cost of large barrels by number of barrels
	return allLargeCost / 5;
=======
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
// - Find the distance of the earth circumference in miles
	const earthCircumference = 24901;
// - Calculate the # of gallons used to travel around the earth
//   - circumference / MPG (miles per gallon)
	 milesPerGallon = 12;
	var numberOfGallons = earthCircumference / milesPerGallon;
// - Calculate the cost:
//   - total gallons used * cost of fuel
	  fuelPrice = numberOfGallons * 3;
	return fuelPrice;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(gallonsCostco, percentCostco, gallonsKirkland, percentKirkland){
// - Find the total amount of pure fruit juice (gal)
//   - Total of Costco pure fruit juice:
	gallonsCostco = 3;
	percentCostco = 0.20;
//     - percentage pure fruit juice * number of gallons
	var pureCostco = percentCostco * gallonsCostco;
//   - Total of Kirkland pure fruit juice:
	gallonsKirkland = 2;
	percentKirkland = 0.55;
//     - percentage pure fruit juice * number of gallons
	var pureKirkland = percentKirkland * gallonsKirkland;
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
	var totalPure = pureCostco + pureKirkland;
// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice
	var totalGallons = gallonsCostco + gallonsKirkland;
// - Calculate (total pure fruit juice) / (total juice)
	return totalPure / totalGallons;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
