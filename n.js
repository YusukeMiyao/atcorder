function Main(input) {
    const [M,H] = input.split(' ').map(Number)
    console.log(H %M  === 0 ? 'Yes':'No')
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));