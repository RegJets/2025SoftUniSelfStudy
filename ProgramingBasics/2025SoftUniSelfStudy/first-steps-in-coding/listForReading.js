function vacationBookList(bookLists, readingListsForOneHour, daysForReading){
    let timeForReading = bookLists / readingListsForOneHour;
    let neededHoursForDay = timeForReading / daysForReading;
    console.log(neededHoursForDay)
}
vacationBookList(432, 15, 4);

