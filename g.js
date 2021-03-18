function Main(input) {
    const [N, X] = input.split('\n')[0].split(' ').map(e => Number(e))
    const S = input.split('\n')[1].split('')
    let ans = X;
    S.map(e => {
        if (e === 'o') {
            ans = ans + 1
        } else {
            if (ans > 0) {
                ans = ans - 1
            }
        }
    })
    console.log(ans)
}
// var input = `20 10
// xxxxxxxxxxxxxxxxxxxx`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));