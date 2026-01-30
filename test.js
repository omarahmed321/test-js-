//first task
// let city = prompt('محافظتك ايه؟');
// switch (city){
//     case 'cairo':
//         console.log('you will take the 5% discount');
//         break;
//         case 'alex':
//         console.log('you will take the 10% discount');
//         break;
//         case 'Aswan':
//         console.log('you will take the 20% discount');
//         break;
//         default:
//         console.log('هتاخد 40في الميه دسكونت');

// }
//-------------------------------------------------------------------------------------------

//second task
// let numOfMonths =Number(prompt('enter the number of months?'));
// let personalTraining = confirm('you need personal training?');
// let price = numOfMonths * 350;
// if (numOfMonths >= 6 && numOfMonths< 12){
//     price -= (10/100 * price);
// }
// else if(numOfMonths >=12 ){
//     price -= (15/100 * price);
// }
// if(personalTraining){
//     price += 200;
// }
// price += (14/100 * price);
// console.log('the total price:'+price);
//-------------------------------------------------------------------------------------------
// third task
// let price = Number(prompt("product price"));
// let quantity = Number(prompt("the quantity of the product"));
// let coupon = prompt("apply a coupon discount if you have.");
// let totalPrice = price * quantity;
// let shipping = 0;
// if (totalPrice >= 1000 && totalPrice >= 0) {
//   shipping = 0;
// } else {
//   shipping = 60;
// }
// if (coupon == "10%") {
//   totalPrice -= (1 / 10) * totalPrice;
// }
// totalPrice += shipping;
// totalPrice += (totalPrice * 14) / 100;
// console.log("the total price is : " + totalPrice);
//-------------------------------------------------------------------------------------------
// fourth task
// let kilowatts = Number(prompt("enter the kilowatts?"));
// let optionalfee = confirm("you wanna pay an optionalfee?");
// let price = 0;
// if (kilowatts > 100) {
//   let elbaqi = kilowatts - 100;
//   price += elbaqi * 1.2;
//   price += 75;
// } else {
//   price += kilowatts * 0.75;
// }
// console.log("kilowatts:" + kilowatts);
