// inputに入力データ全体が入る
function Main(input) {
    var arr = input.split(' ')
    console.log(arr)
    var N = parseInt(input[0], 10)
    var S = parseInt(arr[1], 10)
    var D = parseInt(arr[2], 10)
    var arrXY = input.split(`${'\n'}`);
    console.log(arrXY)
}
var input = `4 9 9
5 5
15 5
5 15
15 15`;
Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));