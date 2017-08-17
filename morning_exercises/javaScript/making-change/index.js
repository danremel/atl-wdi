// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///


var makeChange = function(price, payment) {
  console.log(`Price: ${price}`);
  console.log(`Payment: ${payment}`);

  var change = Math.floor((payment*100) - (price*100));

  console.log(`change: ${change}`);

  if (change <= 0){
    console.log("No Change\n\r")
    return [0,0,0,0];
  }

  var result = [25,10,5,1].map(function(coin){
    var numberOfCoins = Math.floor(change / coin);
    change %= coin;
    return numberOfCoins;
  });
  console.log(`Result: ${result}\n\r`);

  return result;
};
/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
