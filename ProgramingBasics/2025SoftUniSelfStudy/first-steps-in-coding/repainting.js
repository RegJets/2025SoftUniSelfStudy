function repainting(nylon, paint, paintThinner, workTime) {
    const nylonPrice = 1.50;
    const paintPrice = 14.50;
    const thinnerPrice = 5.00;
    const bags = 0.40;

    const nylonCost = (nylon + 2) * nylonPrice;
    const paintCost = (paint + paint * 0.10) * paintPrice; 
    const thinnerCost = paintThinner * thinnerPrice;

    const materials = nylonCost + paintCost + thinnerCost + bags;
    const labor = materials * 0.30 * workTime;

    const total = materials + labor;
    console.log(total);
}

repainting(5, 10, 10, 1);