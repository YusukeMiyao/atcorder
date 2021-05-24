function Main(input) {
  const [a, b, c] = input.split("\n")[0].split(" ").map(Number);
  if (a - b === b - c) {
    console.log("Yes");
  } else if (a - c === c - b) {
    console.log("Yes");
  } else if (b - a === a - c) {
    console.log("Yes");
  } else if (b - c === c - a) {
    console.log("Yes");
  } else if (c - a === a - b) {
    console.log("Yes");
  } else console.log("No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
