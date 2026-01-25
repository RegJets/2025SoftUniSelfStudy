function foodDelivery(chicken, fish, vegetables){
const chickenPrice = 10.35
const fishPrice = 12.40
const vegetablesPrice = 8.15

const chickenOrder = chicken * chickenPrice
const fishOrder = fish * fishPrice
const vegetablesOrder = vegetables * vegetablesPrice
const FullOrderPrice = chickenOrder + fishOrder + vegetablesOrder
const DesertPrice = 0.20 * FullOrderPrice
const deliveryPrice =  2.50
const orderPrice = FullOrderPrice + DesertPrice + deliveryPrice
console.log (orderPrice);
}
foodDelivery(2, 4, 3)
