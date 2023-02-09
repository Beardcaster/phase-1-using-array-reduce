const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(getSum);

function getSum(total, num) {
    return total + num;
}


// console.log(couponLocations.reduce(couponCounter, 0))  <------

// const letters = ['a', 'b', 'c', 'b', 'a', 'a'];

// const lettersCount = letters.reduce(function(countObj, currentLetter) {
//     if (currentLetter in countObj) {
//         countObj[currentLetter]++;
//     } else {countObj[currentLetter] = 1;
//     } 
//     return countObj;
// }, {});

// console.log(lettersCount);

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];

// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element) { return element * 2 + accumulator}, 0)
// console.log(doubledAndSummed);

// const tacoAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)
// console.log(tacoAndSummed);
// // => 12


// function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {               <------------
//         accum = reducer(accum, element);
//     };
//     return accum;
// }

// function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;

// // console.log(ourReduce(couponLocations, couponCounter, 0));

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//THESE TWO FUNCTIONS ARE THE SAME THING//
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//

// console.log(couponLocations.reduce(couponCounter, 0))  <------


// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;

//     for (const product of products) {
//         totalPrice += product.price;
//     };

//     return totalPrice;
// }

// console.log(getTotalAmountForProducts(products));