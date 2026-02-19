let moneyBudget = true;
let setMenuAvailable = true;
let setMenuRice = 200;
let setMenuFish = 100;
let drinks = true;
let softDrinks = 30;
let MojoDrink = 20;
if (setMenuAvailable && moneyBudget) {
    console.log('Order Any Item');
    if(setMenuRice < 250){
        console.log('Order Rice');
    }
    else{
        console.log('Donot Order Rice');
    }
    if (setMenuFish <= 100) {
        console.log('Order Fish')
    } else {
        console.log('Donot Order Fish')
    }
} else {
    console.log('Please Look at Our Other Menu')
}
if (drinks && moneyBudget) {
    console.log('Order Drinks Please')
    if (softDrinks >= 30) {
        console.log('Order Soft Drinks')
    } else {
        console.log('DO notOrder Soft Drinks')
    }
    if (MojoDrink == 20) {
        console.log('Order Mojo')
    } else {
        console.log('Donot Order Mojo')
    }
} else {
    console.log('We have no Available Drinks')
}
const applePrice = 55;
const orangePrice = 55;
const bananaPrice = 55;
const mangoPrice = 55;
const carrotPrice = 55;
const totalPrice = (applePrice * 3) + (orangePrice * 2) + (bananaPrice * 5) + (mangoPrice * 8) + (carrotPrice * 10);
console.log(totalPrice);
const discount = (totalPrice * 15) / 100;
const priceAfterDiscount = totalPrice - discount;
if (totalPrice >= 500) {
    console.log('Congratulations, You are eligible for discount. Your discount is' ,discount ,'and new price is ' ,priceAfterDiscount);
} else {
    console.log('Thank you for shopping with us');
}