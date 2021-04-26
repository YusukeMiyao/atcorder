//A - +-x
function Main(input) {
  const [a, b] = input.split(" ").map(Number);
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;

  console.log(Math.max(addition, subtraction, multiplication));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
