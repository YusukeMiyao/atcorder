function Main(input) {
    const [A, B, W] = input.split(' ').map(Number)
    for (let i = 0; i<=1000000; i++){
        if(A*i)
    }
    // let upper=Math.floor(1000*W/A)
    // let lower=Math.ceil(1000*W/B)
    // lower>upper?console.log("UNSATISFIABLE"):console.log(lower,upper)
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));