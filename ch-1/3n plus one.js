// counter is not resetting

// const getToOneFrom = (function () {
//   let counter = 0;
//   return function (num) {
//     if (num < 1) return 'error';
//     counter++;
//     if (num === 1) {
//       let counter2 = counter; // pretty hacky
//       counter = 0;
//       return counter2;
//     }
//     if (num % 2 === 1) {
//       return getToOneFrom(3 * num + 1);
//     } else {
//       return getToOneFrom(num / 2);
//     }
//   };
// })();

const getToOneFrom = function (num) {
  if (num < 1) return 'error';
  if (num === 1) {
    return 1;
  }
  if (num % 2 === 1) {
    return 1 + getToOneFrom(3 * num + 1);
  } else {
    return 1 + getToOneFrom(num / 2);
  }
};

function maxIterationsToReachOneBetween(first, last) {
  let maxCount = 0;

  for (let i = first; i <= last; i++) {
    let thisCount = getToOneFrom(i);
    if (thisCount > maxCount) maxCount = thisCount;
  }

  return `${first} ${last} ${maxCount}`;

}
