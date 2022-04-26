// Code your solution in this file!
const myArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => {
    return fare => multiplier * fare
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, foo) => {
    return foo(drivers)
}
