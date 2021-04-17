//A - White Cells
function Main(input) {
  const [H, W] = input.split("\n")[0].split(" ").map(Number);
  const [h, w] = input.split("\n")[1].split(" ").map(Number);
  console.log((H - h) * (W - w));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
