//second task
let numOfMonths =Number(prompt('enter the number of months?'));
let personalTraining = confirm('you need personal training?');
let price = numOfMonths * 350;
if (numOfMonths >= 6 && numOfMonths< 12){
    price -= (10/100 * price);
}
else if(numOfMonths >=12 ){
    price -= (15/100 * price);
}
if(personalTraining){
    price += 200;
}
price += (14/100 * price);
console.log('the total price:'+price);
//-------------------------------------------------------------------------------------------