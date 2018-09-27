// Number row with 2 exceptions (Cycle, 3 conditions)
for (var i = 0; i <= 100; i++) {
  if (i == 0) {
  }else if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz"+"Buzz");
  }else if (i % 3 == 0) {
    console.log("Fizz");
  }else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
