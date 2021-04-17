// 
function Main(input) {
  const num = Number(input)
  console.log(num >= 2 ? num - 1:0)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));