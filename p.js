function Main(input) {
    const [a,b] = input.split('\n')[0].split(' ').map(Number)
    const [c,d] = input.split('\n')[1].split(' ').map(Number)
    console.log(b-c)
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));