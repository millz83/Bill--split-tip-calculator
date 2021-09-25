const cost = prompt('How much was your meal?');
const number = prompt('How many people are splitting the bill?');
const tip = prompt('What percentage do you want to tip?');
const share = cost * (1+tip/100)/number;
alert(`You all need to pay £${share.toFixed(2)} each.`)