function Main(input) {
    const a = input.split('\n')[1].split(' ').map(Number)
    
    let gcd = 0;
    let ans = 0;
    for (let i = 2; i <= 1000; i++) {
        let num = 0;
        a.map(e => {
            if (e % i === 0) num += 1;
        })

        if (num > gcd) {
            gcd = num;
            ans = i;
        }
    }
    console.log(ans);
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));