// Problem 5 : Convert your gems into start

/*The job of this function is to convert the input value of gems of three friends into diamonds 
and output the sum of diamonds of the three friends converted according to a certain condition.*/

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
gemsToDiamond();

// Problem 5 : Convert your gems into  start
const gugu = gemsToDiamond(20, 200, "k");
console.log(gugu);
