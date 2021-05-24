// B - Ordinary Number
function Main(input) {
  const arr0 = Number(input.split("\n")[0]);
  const arr1 = input.split("\n")[1].split(" ").map(Number);
  let ans = 0;
  for (let i = 1; i < arr0; i++) {
    if (
      (arr1[i] > arr1[i - 1] && arr1[i] < arr1[i + 1]) ||
      (arr1[i] < arr1[i - 1] && arr1[i] > arr1[i + 1])
    ) {
      ans += 1;
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
