function Main(input) {
    const [a, b] = input.split('\n')[0].split(' ').map(e => Number(e))
    const [c, d] = input.split('\n')[1].split(' ').map(e => Number(e))
console.log(a*d-b*c)
}
// var input = `100 100
// 100 100`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));