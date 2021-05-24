// A - Fifty - Fifty;
function Main(input) {
  const s = input.split("\n")[0].split("");
  const t = s[0];
  let u = "";
  let a = 0;
  let b = 0;
  for (let i = 0; i < s.length; i++) {
    if (t === s[i]) {
      a += 1;
    } else u = s[i];
  }
  for (let j = 0; j < s.length; j++) {
    if (u === s[j]) {
      b += 1;
    }
  }
  console.log(a === 2 && b === 2 ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
