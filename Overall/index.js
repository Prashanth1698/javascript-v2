///////////Exercise-1 Basics/////////////////////
let T = 10;
let S = 8;
let D = 20;

const total = (T + S + D);
console.log(total);

let a = 100;
let b = 20;
let c = 50;
let d = 200;
const sum = (a-b-c+200);
console.log(sum);

document.body.innerHTML = 'Prashanth Ganesan!';

//alert('Prashanth!');

//////////////////Exercise-2 Numbers and Math/////////////////////////
let q = 10;
let w = 8;
let e = 5;
const hotel = (q+(w*8)+e);
console.log(hotel);
const res = (q+(w*8)+e)/3;
console.log(Math.round(res));

let toster = 18.50;
let shirt = 7.50;
let tax = 0.1;
const shopping = (toster+shirt)*tax;
const shop = (toster+shirt)*0.2;
console.log(shopping);
console.log(shop);
//////////////Amazon/////////////
let toaster = 15.99;
let basketball = 21.54;
let t_shirt = 10;
const z = (toaster+t_shirt+basketball)
console.log("Items(3): "+ z );
let shipping  = 4.99;
const x = (toaster+t_shirt+basketball)+ shipping
console.log("Total before tax: "+ x );
let t = 5.28;
const y = (toaster+t_shirt+basketball+ shipping)+ t
console.log("Order Toatl: ",Math.round(y));
////temperature////
let tempC = 25;
let tempF = (tempC * 9/5) + 32;
console.log(tempF);
let fahrenheit = 86;
let celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);
let temp = -5;
let temp1 = (temp * 9/5) + 32;
console.log(temp1);
//////////////////////////string////////////////////
let coffee = 5;
let bagel = 3;
let bill = (coffee+bagel);
console.log(`Total cost:$`, bill);
console.log(`Total cost:$${bill}`); //interpolation
//console.log(alert(`Total cost:$${bill}`)); //interpolation
console.log(`Item(${2+2}): $${(499+799) / 100}`)
console.log(`Shipping & Handling: $${(998) / 100}`)
console.log(`Total Before Tax: $${(6786) / 100}`)
console.log(`Estimated Tax(10%): $${(Math.round(6.79))}`)


////////////////variable////////////////
let name = "prashanth"
console.log(name);
console.log(`My name is: ${name}`);

let coffeee = 9;
let bagels = 3;
let soup = 8;
let price = (coffeee + (bagels*2) + soup)/0.1;
let taxx = price*0.1;
console.log(taxx);
console.log(price);
console.log(`Cost of food: $${price}`);
console.log(`Tax(10%): $${taxx}`);
let totalcost = price + taxx
console.log(`Total Cost: $${totalcost}`);

// /////boolean & if condition
let hour = new Date().getHours(); // Extract the current hour (0-23)

if (hour > 6 && hour <= 12) {
    console.log('Good Morning Prashanth');
} else if (hour > 12 && hour <= 17) {
    console.log('Good Afternoon Prashanth');
} else if (hour > 17 && hour <= 24) {
    console.log('Good Evening Prashanth!');
} else {
    console.log('Good Night Prashanth!');
}

//amusement park
let age = 9;
if(age >50  && age <=70){
    console.log('Discount is availabel');
}else if (age <=18 || age >=50)
    console.log('no discount');

//v2
let era = 31;
let isHoliday = false; // Set this to true if it is a holiday

if (!isHoliday && (era > 50 && era <= 70)) {
    console.log('Discount is available');
}else if (!isHoliday && (era > 30 && era <= 50)) {
    console.log('partial Discount is available');
}else {
    console.log('No discount');
}

//random 6f
let maths = Math.random();
console.log(maths);
///6g
let Number = 0.1;
if (Number < 0.5 || Number > 0.5){
    console.log('heads');
}else{
     console.log('tails');
}
//6h
let Number1 = 0.6;
let result;
if (Number1 < 0.5){
    result = 'heads';
}else if (Number1 > 0.5) {
    result = 'tails';
}     
console.log(result);

//6i
const Guess = 'heads';
if(Guess === 'heads'){
    console.log('You lose');
}else{
    console.log('You Win');
}

//6j
const Guesss = 'tails';
let results = Guesss === 'heads' ? 'You lose' : 'You Win';
console.log(results);
