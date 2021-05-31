// A - Chinchirorin;
function Main(input) {
  const [a, b, c] = input.split("\n")[0].split(" ").map(Number);
  let ans = 0;
  if (a === b) {
    ans += c;
  } else if (a === c) {
    ans += b;
  } else if (b === c) {
    ans += a;
  } else ans = 0;
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
