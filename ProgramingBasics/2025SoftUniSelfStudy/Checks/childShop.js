function toyShop(tripPrice, puzzle, doll, bear, minion, truck){
    let totalToys =(puzzle + doll + bear + minion + truck);
    let totalPrice = puzzle * 2.60 + doll * 3.00 + bear * 4.10 + minion * 8.20 + truck * 2.00;
    if (totalToys => 50){
        totalPrice *= 0.75;
        
    }
    totalPrice *= 0.90
    let diff = Math.abs(totalPrice - tripPrice)
    if (totalPrice > tripPrice){
        console.log (`Yes! ${diff.toFixed(2)} lv left`)
    } else{
        console.log(`Not enought money! ${diff.toFixed(2)} lv needed`);
    } 
        
    }
    toyShop(320, 8, 2, 5, 5, 1);
 

