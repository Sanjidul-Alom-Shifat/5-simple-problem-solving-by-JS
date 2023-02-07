// Problem 01 : Let’s play a mind game start

function mindGame(Number) {
  if (typeof Number != "number") {
    return "Please Input A Number";
  } else {
    const TotalNumber = (Number * 3 + 10) / 2 - 5;
    return TotalNumber;
  }
}
mindGame();

// Problem 01 : Let’s play a mind game end
const FinalResult = mindGame(5);
console.log(FinalResult);
