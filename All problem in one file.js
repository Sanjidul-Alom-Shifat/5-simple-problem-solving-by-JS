// Problem Solving 01 : Let’s play a mind game start
/*The work of this function is to multiply the input number by 3, then
add 10, then divide by 2, then subtract 5, which will return the output.*/

function mindGame(Number) {
  if (typeof Number != "number") {
    return "Please Input A Number";
  } else {
    const TotalNumber = (Number * 3 + 10) / 2 - 5;
    return TotalNumber;
  }
}

// Problem Solving 01 : Let’s play a mind game end

// Problem Solving 2 : Finding even or odd start
/* Description : The job of this function is to determine whether
 the total number of characters in a string is even or odd*/

function evenOdd(String) {
  if (typeof String != "string") {
    return "Please Input A String";
  } else {
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

// Problem Solving 2 : Finding even or odd end

// Problem Solving 3 : Is Less or Greater than seven start
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

// Problem Solving 3 : Is Less or Greater than seven end

// Problem Solving 4 : Finding Bad data start
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

// Problem Solving 4 : Finding Bad data end

// Problem Solving 5 : Convert your gems into diamond start
/* Description : The work of this function is to convert the diamonds by inputting 
the value of gems from three friends and if their total diamond value is more than
 2000 then 2000 will be subtracted from the total diamond and if it is less then it
  will return the value of total diamond.*/

function gemsToDiamond(FirstFriendGems, SecondFriendGems, ThirdFriendGems) {
  if (
    typeof FirstFriendGems != "number" ||
    typeof SecondFriendGems != "number" ||
    typeof ThirdFriendGems != "number"
  ) {
    return "Please Provide All Valid Numbers";
  } else {
    const FirstFriendDimonds = FirstFriendGems * 21;
    const SecondFriendDimonds = SecondFriendGems * 32;
    const ThirdFriendDimonds = ThirdFriendGems * 43;
    const TotalDimonds =
      FirstFriendDimonds + SecondFriendDimonds + ThirdFriendDimonds;
    if (TotalDimonds >= 1000 * 2) {
      return TotalDimonds - 2000;
    } else {
      return TotalDimonds;
    }
  }
}

// Problem Solving 5 : Convert your gems into diamond end
