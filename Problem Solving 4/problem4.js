// Problem 4 : Finding Bad data start

/*Description : The job of this function is to find
 the total number of negative numbers in an array*/

function findingBadData(array) {
  if (Array.isArray(array)) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        count += 1;
      }
    }
    return count;
  } else {
    return "Enter A Absolute Array";
  }
}

// Problem 4 : Finding Bad data end
const bodu = findingBadData([-4, -9, -5, -33, -55]);
console.log(bodu);
