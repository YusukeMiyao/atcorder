//B - One Clue
function Main(input) {
  const [k, x] = input.split(" ").map(Number);
  const a = x - (k - 1);
  const b = x + (k - 1);
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
