function Main(input) {
    const [A, B] = input.split(' ').map(Number)
    
    console.log(2*A+100-B)
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));