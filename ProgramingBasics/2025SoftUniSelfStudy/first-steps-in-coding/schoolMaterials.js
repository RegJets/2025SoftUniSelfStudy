function schoolMaterials(countPens, countMarkers, coundFloyd, percentDiscount){
let pensPrice = 5.80
let MarkersPrice = 7.20
let FloydPrice = 1.20

let priceForAllPens = countPens * pensPrice
let priceForAllMarkers = countMarkers * MarkersPrice
let priceForFloyd = coundFloyd * FloydPrice
let finalPriceWithoutDiscound = priceForAllMarkers + priceForAllPens + priceForFloyd
let discount = finalPriceWithoutDiscound * percentDiscount / 100
let finalPrice = finalPriceWithoutDiscound - discount
console.log(finalPrice);
}
schoolMaterials(2 , 3, 4, 25)