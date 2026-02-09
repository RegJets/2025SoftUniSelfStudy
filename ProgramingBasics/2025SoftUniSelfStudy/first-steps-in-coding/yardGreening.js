function yardGreening(spaceForGreening){
let sumForGreening = spaceForGreening * 7.61;
let discount = sumForGreening * 0.18;
let sumWithDiscount = sumForGreening - discount; 
console.log(`The final price is: ${sumWithDiscount} lv.`);
console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);