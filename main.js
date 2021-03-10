// inputに入力データ全体が入る
function Main(input) {
    var num = Number(input);
    var N = 0;
    for (var i = 1; ; i++) {
        N = num + i
        // console.log(N,i)
        if (N % 100 == 0) {
            break;
        }
    }
    console.log(N - num);
}
// var input = `1000`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));