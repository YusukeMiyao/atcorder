// B - Permutation Check
function Main(input) {
  const num = Number(input.split("\n")[0])
  const arr = input.split("\n")[1].split(" ").map(Number)
  const arrLength = new Set(arr).size
  num === arrLength ? console.log("Yes") : console.log("No")
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
