function Main(input) {
    const [sx, sy, gx, gy] = input.split(' ').map(e => Number(e))
    console.log((sx * gy + gx * sy) / (sy + gy));
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));