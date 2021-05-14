//B - 200th ABC-200
function Main(input) {
  let [n, k] = input.split("\n")[0].split(" ").map(Number);
  for (i = 0; i < k; i++) {
    if (n % 200 === 0) {
      n /= 200;
    } else n = 1000 * n + 200;
  }
  console.log(n);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
