// Problem Solving 2 : Finding even or odd start

/* Description : The job of this function is to determine whether
 the total number of characters in a string is even or odd*/

function evenOdd(String) {
  if (typeof String != "string") {
    return "Please Input A String";
  }
  else {
    let TotalLength = 0;

    for (let i = 0; i < String.length; i++) {
      TotalLength++;
    }
    if (TotalLength % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
evenOdd();

// Problem Solving 2 : Finding even or odd start
console.log(evenOdd("oii"));
