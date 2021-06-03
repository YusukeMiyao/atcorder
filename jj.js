// A - Chinchirorin
function Main(input) {
  const [r] = input.split("\n")[0].split(" ").map(Number)
  console.log(3 * r * r)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
