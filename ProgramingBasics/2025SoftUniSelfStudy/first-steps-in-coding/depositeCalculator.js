function deposite(depositeSum, depositeMonths, interestPercent) {
    let interestsum = depositeSum * (interestPercent / 100);
    let interestSumForMonth = interestsum / 12;
    let finalSum = depositeSum + depositeMonths * interestSumForMonth;
    console.log(finalSum)
}
deposite(2350, 6, 7);