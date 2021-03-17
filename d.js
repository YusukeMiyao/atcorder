// inputに入力データ全体が入る
function Main(input) {
    input.split(' ')
    if (input[0] === input[1] && input[1] === input[2]) {
        console.log('Won')
    } else {
        console.log('Lost')
    }
}
// var input = `SSS`;
// Main(input);
// //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(requsire("fs").readFileSync("/dev/stdin", "utf8"));