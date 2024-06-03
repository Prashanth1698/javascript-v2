///7a
function greet1 (){
    console.log('Hello!');
}
greet1(); // Output: Hello!assistant

///7b
function greet2(name){
    console.log(`Hello,${name}!`);
}
greet2('prashanth'); 

///7c
function greet3(name){
    if (!name){
        console.log('Hello there!');
    }else{
        console.log(`Hello ${name}!`);
    }
}
greet3('prashanth')
greet3('system')
greet3()

///7d
function converttoFahrenheit(){
    let tempC = 25;
    let tempF = (tempC * 9/5) + 32;
    console.log(tempF);
}
converttoFahrenheit()

///7e
function converttoCelsius(){
    let fahrenheit = 86;
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius);
}
converttoCelsius()

///7f

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
function convertTemperature(degree,unit){

    if(unit === 'C'){
        const result = converttoFahrenheit(degree);
        return (`${result}`)
    }else if(unit === 'F'){
        const result = converttoCelsius(degree);
        return (`${result}`)
    }
}
console.log(convertTemperature (30, 'C'))
console.log(convertTemperature (90, 'F'))

///7g
function convertLength(length, from, to){
    if(from === 'km' && to === 'miles'){
        return `${length / 1.6 }miles`;
    }else if(from === 'miles' && to === 'km'){
        return `${length * 1.6 }km`;
    }else if(from === to){
        return `${length }${to}`;
    }
}
console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

///7h
function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
      return `${length / 1.6} ${to}`;

    } else if (from === 'km' && to === 'ft') {
      return `${length * 3281} ${to}`;
      
    } else if (from === 'miles' && to === 'km') {
      return `${length * 1.6} ${to}`;

    } else if (from === 'miles' && to === 'ft') {
      return `${length * 5280} ${to}`;

    } else if (from === 'ft' && to === 'km') {
      return `${length / 3281} ${to}`;

    } else if (from === 'ft' && to === 'miles') {
      return `${length / 5280} ${to}`;
    } else if (from === to) {
      return `${length} ${to}`;
    }
  }

  console.log(convertLength(50, 'miles', 'km'));
  console.log(convertLength(32, 'km', 'miles'));
  console.log(convertLength(50, 'km', 'km'));
