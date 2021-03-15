// inputに入力データ全体が入る
function Main(input) {
    const [A, B, C] = input.split('\n')[0].split(' ').map(Number)
    if (C == 0) {
        if (A > B) {
            console.log('Takahashi')
        } else {
            console.log('Aoki')
        }
    } else {
        if (B > A) {
            console.log('Aoki')
        } else {
            console.log('Takahashi')
        }
    }
}
// var input = `2 2 0`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));