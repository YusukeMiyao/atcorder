// A - Square Inequality
function Main(input) {
  const [a, b, c] = input.split("\n")[0].split(" ");
  console.log(a ** 2 + b ** 2 < c ** 2 ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
