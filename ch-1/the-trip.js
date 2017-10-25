function convertInput(string) {
  if (!(typeof string === 'string') || string.length === 0) return [];

  let array = string.split('\n').map(num => parseFloat(num));
  let subArray = [];
  let finalArray = [];
  let sortFloat = (a, b) => a - b;

  while (array.length) {
    if (array[0] === 0) {
      return finalArray;
    } else {
      subArray = array.slice(1, array[0] + 1);
      subArray.sort(sortFloat);
      finalArray.push(subArray);
      array.splice(0, array[0] + 1);
    }
  }
  return finalArray;
}

function calculateAverageOfArray(array) {
  let total = array.reduce((a, b) => a + b);
  return (total / array.length);
}

function calculateForOne(array) {
  const ave = calculateAverageOfArray(array);
  return array.map(elem => {
    if (elem < ave) { return ave - elem; }
    else { return 0; }
  }).reduce((a, b) => a + b);
}

function calculateMoneyToExchange(input) {
  let allValues = convertInput(input);
  allValues = allValues.map(array => {
    return calculateForOne(array);
  });
  // doesn't round down to 11.99 from 11.999
  return allValues.map(e => `$${e.toFixed(2)}`).join('\n');
}

console.log(calculateMoneyToExchange('3\n10.00\n20.00\n30.00\n4\n15.00\n15.01\n3.00\n3.01\n0'));
