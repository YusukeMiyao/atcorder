// A - kcal
function Main(input) {
  const [a, b] = input.split("\n")[0].split(" ").map(Number)
  console.log((b / 100) * a)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
