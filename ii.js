// B - Golden Apple
function Main(input) {
  const [n, d] = input.split("\n")[0].split(" ").map(Number)
  const range = 1
  let i = 0
  for (i; i <= 20; i++) {
    if (i - d === 1) break
  }
  const max = i + d
  console.log(Math.ceil(n / max))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
