/* logic:

1. clean input data by making into sorted array of length equaling number of people
  - if 0, return
  - else take next x lines and add to array
  - sort array
2. sort array

*/

function convertInput(string) {

  if (!string) return [];

  let array = string.split('\n').map(num => parseFloat(num));
  let subArray = [];
  let finalArray = [];
  function sortFloat(a, b) { return a - b; }

  while (array.length) {
    if (array[0] === 0) {
      return finalArray
    } else {
      subArray = array.slice(1, array[0] + 1);


      subArray.sort(sortFloat);
      finalArray.push(subArray);
      array.splice(0, array[0] + 1);
    }
  }



  return finalArray;

}
