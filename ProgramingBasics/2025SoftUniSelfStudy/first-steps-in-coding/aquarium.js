function aquarium(length, width, height, percent) {
    let volumeCm3 = length * width * height;
    let volumeLiters = volumeCm3 * 0.001;

    let occupied = percent / 100;
    let neededLiters = volumeLiters * (1 - occupied);

    console.log(neededLiters);
}

aquarium(105, 77, 89, 18.50);