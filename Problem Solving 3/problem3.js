// Problem 3 : Is Less or Greater than seven start

/* Description : The task of this function is to determine whether
 the difference of two numbers is greater or less than seven */

function isLGSeven(Number) {
  if (typeof Number != "number") {
    return "Please Enter A Number";
  } else {
    const DistanceOfNumber = Number - 7;
    if (DistanceOfNumber >= 7) {
      return Number * 2;
    } else {
      return DistanceOfNumber;
    }
  }
}
isLGSeven();

// Problem 3 : Is Less or Greater than seven end
const g = isLGSeven(15);
console.log(g);
