/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 500;
const coke  = 30;
const discount = burger - coke;
// const payment = burger - discount;

if(burger <= 400){ 
    console.log('pay this amount');
}
else if(burger <= 500){
    console.log('you will get a discount now burger price is ', discount, 'tk');
}
else{
    console.log(coke);
}


