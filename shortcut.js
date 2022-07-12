// check truthy
const money = 80;
let myMoney = 50;
if (money) {
    myMoney = myMoney * 100;
    console.log(myMoney, 'is truthy');
}
else {
    myMoney = 0;
    console.log(myMoney, 'is falsy');
}

// check falsy
// !myMoney true k false baniye dey
let myMoney1 = 40;
if (!myMoney1) {
    myMoney1 = myMoney1 + 10;
    console.log(myMoney1);
}
else {
    console.log(myMoney1);
}


let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha';
}
// if else er shortcut eta k ternary bole
// ternary operator
let food1 = money > 100 ? 'biriyani' : 'cha';
console.log(food1);

let drink = (myMoney > 45 && myMoney1 > 50) ? 'cook' : 'filter water';
console.log(drink);


// nuber to string
const number = 54;
console.log(number);
const numberStr = number + '';
console.log(numberStr);
// string to number
const input = '44';
const inputNum = +input;
console.log(inputNum);

// use ternary using function
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side true then right side will be executed
isActive && showUser();

// use || if the left side false then right side will be executed
isActive || hideUser();

// toggle boolean, maane true k false r false k true
isActive = !isActive;
// isActive er value false, jehetu upore true ache
isActive || hideUser();