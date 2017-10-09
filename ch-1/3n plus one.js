// counter is not resetting

const getToOneFrom = (function () {
  let counter = 0;
  return function (num) {
    if (num < 1) return 'error';
    while (num !== 1) {
      counter++;
      if (num % 2 === 1) {
        // console.log(num, counter);
        return getToOneFrom(3 * num + 1);
      } else {
        // console.log(num, counter);
        return getToOneFrom(num / 2);
      }
    }
    counter++;
    // console.log(num, counter);
    return counter;
  };
})();

function maxIterationsToReachOneBetween(first, last) {
  let maxCount = 0;

  for (let i = first; i <= last; i++) {
    let thisCount = getToOneFrom(i);
    if (thisCount > maxCount) maxCount = thisCount;
  }

  return `${first} ${last} ${maxCount}`;

}
