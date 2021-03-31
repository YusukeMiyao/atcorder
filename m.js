function Main(input) {
    const s = input.split('\n')[0].split('')
    console.log(`${s[1]}${s[2]}${s[0]}`);
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));