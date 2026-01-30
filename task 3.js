// third task
let price = Number(prompt("product price"));
let quantity = Number(prompt("the quantity of the product"));
let coupon = prompt("apply a coupon discount if you have.");
let totalPrice = price * quantity;
let shipping = 0;
if (totalPrice >= 1000 && totalPrice >= 0) {
  shipping = 0;
} else {
  shipping = 60;
}
if (coupon == "10%") {
  totalPrice -= (1 / 10) * totalPrice;
}
totalPrice += shipping;
totalPrice += (totalPrice * 14) / 100;
console.log("the total price is : " + totalPrice);
//-------------------------------------------------------------------------------------------