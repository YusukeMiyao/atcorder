// inputに入力データ全体が入る
function Main(input) {
    input = input.split('');
    const isUpperCase = str => {
        return str === str.toUpperCase() ? true : false
    }
    const isLowerCase = str => {
        return str === str.toLowerCase() ? true : false
    }
    var isFalse = false;
    var i=1;
    input.map(e => {
        for (i; i < input.length+1;){
            if (i % 2 !== 0) {
                if (!isLowerCase(e)) {
                    isFalse = true;
                break;
                }
            } else {
                if (!isUpperCase(e)) {
                    isFalse = true;
                    break;
                }
            }
            break;
        }
        i++
    })
    if (isFalse) {
        console.log('No')
    }else console.log('Yes')
}
// var input = `eASY`;
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));