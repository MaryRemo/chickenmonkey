// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

    if (currentNumber % 5 === 0) { 
    console.log("Chicken");
    }

    else if (currentNumber % 7 === 0) {
      console.log("Monkey");
    }

    if (currentNumber % 5 ===0 && currentNumber % 7 === 0) {
      console.log("ChickenMonkey");
    }
    
    else {
      console.log(currentNumber);
    }
}


// A local nightclub is having a Battle of the Bands night in a few months.
//  They expect many bands to sign up because the grand prize is $20,000. 
// To make things easier on the nightclub management, they want each band to
//  be assigned a number so that they can easily keep track of the order in which 
// the bands will perform.

// Your job is to write a function that accepts any band name as an argument. 
// The function will increment a global variable by one each time it is invoked, 
// and return that number, and the band name concatenated together.

let bandNumber = 0

const takeNumber = function (bandName) {
   bandNumber = bandNumber + 1;
   console.log(bandNumber + ". " + bandName)
}

takeNumber("Galactic Scum")
takeNumber("Underdogs")

// Your task is to iterate over the array of uncookedFood and invoke the function for each 
// item so that the cookedFood array contains all of the items after they are cooked.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}



// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];


for (i = 0; i < uncookedFood.length; i++) {
  function grill (currentObject) {
  currentObject.cooked = true;
  cookedFood.push(currentObject);
}
}

grill(uncookedFood);
console.log(cookedFood);

