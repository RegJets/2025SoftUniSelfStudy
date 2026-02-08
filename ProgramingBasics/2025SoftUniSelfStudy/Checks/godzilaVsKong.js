function godzilaVsKong(budget, statist, oneStatDressPrice){
   let decor = (budget * 0.10);
   let dressForStatistPrice = (statist * oneStatDressPrice); 
        if (statist > 150) {
            dressForStatistPrice *= 0.90
        }
    let fullPriceForMovie = (decor + dressForStatistPrice);
    let diff = Math.abs (budget - fullPriceForMovie);
    if (budget >= fullPriceForMovie){
        console.log('Action!')
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left`);
    } else{
        console.log('Not enought money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more`);
    }

}
godzilaVsKong(9587.88, 222, 55.68);
