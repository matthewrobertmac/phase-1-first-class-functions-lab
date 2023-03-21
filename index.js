const returnFirstTwoDrivers = (array) => (array.slice(0,2));

const returnLastTwoDrivers = (array) => (array.slice(2,4));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return num * 5;
    };
};


const fareDoubler = (num) => (num * 2)

const fareTripler = (num) => (num * 3)

function selectDifferentDrivers(drivers, fn) {
    if (fn == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
  } else {
    return returnLastTwoDrivers(drivers);
  }
}

