// fourth task
let kilowatts = Number(prompt("enter the kilowatts?"));
let optionalfee = confirm("you wanna pay an optionalfee?");
let price = 0;
if (kilowatts > 100) {
  let elbaqi = kilowatts - 100;
  price += elbaqi * 1.2;
  price += 75;
} else {
  price += kilowatts * 0.75;
}
console.log("kilowatts:" + kilowatts);
