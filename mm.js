//B - Various distances
function Main(input) {
  const [N] = input.split("\n")[0].split(" ").map(Number)
  const arrX = input.split("\n")[1].split(" ").map(Number)
  let abs = 0
  let euclid = 0
  let max = 0
  arrX.map((e) => {
    abs += Math.abs(e)
    euclid += Math.abs(e * e)
    if (max < Math.abs(e)) {
      max = Math.abs(e)
    }
  })

  console.log(abs, Math.sqrt(euclid), max)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
