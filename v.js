//A - Century
function Main(input) {
  const num = Number(input);
  const ans = (num + 99) / 100;
  console.log(Math.floor(ans));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
