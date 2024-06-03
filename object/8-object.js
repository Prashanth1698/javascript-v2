///8a
const product = {
    name: 'Basketball',
    price: 2095
}
console.log(product);
///8b
product.price += 2595
console.log(product.price);
///8c
product ["delivery-Time"] = "3days";
console.log(product);
///8d
function comparePrice(product1, product2){
    if(product1.price < product2.price){
       return product1;
    }else{
        return product2;
    }
}
    const product1 = {
        name: 'Volleyball',
        price: 700
    };
    const product2 = {
        name: 'Football',
        price: 500
    };
console.log(comparePrice(product1, product2));

///8e
function issameProduct(product3, product4){
    if(product3.price === product4.price){
       return product3;
    }else{
        return product4;
    }
}
    const product3 = {
        name: 'jersy',
        price: 700
    };
    const product4 = {
        name: 'glows',
        price: 500
    };
console.log(issameProduct(product3, product4));
///8f
const time = "Good Morning"
console.log(time.toLowerCase());
///8g
const stage = "Beginner"
console.log(stage.repeat(2));