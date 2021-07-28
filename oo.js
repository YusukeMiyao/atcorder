function Main(input) {
  const num = input.split("\n")[0].split("").map(Number)
  let sum = 0
  num.map((e) => {
    sum += e
  })
  sum % 9 === 0 ? console.log("Yes") : console.log("No")
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
