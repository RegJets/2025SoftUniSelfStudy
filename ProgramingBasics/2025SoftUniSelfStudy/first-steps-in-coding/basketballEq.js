function basketballEq(oneYearTax){
const basketballShoes = oneYearTax * 0.60;
const basketbalKitt = basketballShoes * 0.80;
const basketballBall = basketbalKitt / 4;
const basketballAcs = basketballBall / 5;
const allBasketballEq = oneYearTax + basketballShoes + basketbalKitt + basketballBall + basketballAcs;
console.log(allBasketballEq);

}

basketballEq(365);