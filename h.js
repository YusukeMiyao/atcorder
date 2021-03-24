function Main(input) {
    const A = input.split('\n')[0].split('')
    const B = input.split('\n')[1].split('')
    const C = input.split('\n')[2].split('')
    let S = 'a'
    while (true){
        if (S === 'a') {
            if (A.length <= 0) {
                break
            }
            S = A.shift()
        } else if (S === 'b') {
            if (B.length <= 0) {
                break
            }
            S = B.shift()
        } else {
            if (C.length <= 0) {
                break
            }
            S = C.shift()
        }
    }
    console.log(S.toUpperCase())
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));