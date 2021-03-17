function Main(input) {
    const [N, X] = input.split('\n')[0].split(' ').map(e => Number(e))
    let sum = 0;
    let answer = -1;
    for (let i = 1; N >= i; i++) {
        const [V, P] = input.split('\n')[i].trim().split(' ').map(e => Number(e))
        sum += V * P
        if (sum > X * 100) {
            answer = i
            break;
        }
    }
    console.log(answer)
}
// var input = `3 1000000
// 1000 100
// 1000 100
// 1000 100`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));