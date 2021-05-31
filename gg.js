// B - AtCoder Condominium  /
function Main(input) {
  const [n, k] = input.split("\n")[0].split(" ").map(Number);
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      ans += Number(`${i}0${j}`);
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
