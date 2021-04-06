// A - Rotate
function Main(input) {
  const [ a, b, c ] = input.split('')
    console.log(`${b}${c}${a}`)
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));