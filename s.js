// B - Visibility
function Main(input) {
  let [H, W, X, Y] = input.split('\n')[0].split(' ').map(Number)
  H--;
  W--;
  X--;
  Y--;
  const S = input.split('\n').slice(1).map(e => e.split(''))
  let count = 0;
console.log(S,S[X][Y])
  for (let i = Y; i<=W;i++){
    if (S[X][i] === '#') {
      console.log(count,'a')
      break;
    } else count++;
  }
  // console.log(Y)
  for (let i = Y-1; i > 0; i--){
    if (S[X][i] === '#') {
      console.log(count,Y,'b')
      break;
    } else count++;
  }
  for (let i = X; i<=H; i++){
    if (S[i][Y] === '#') {
      console.log(count,'c')
      break;
    } else count++;
  }
  for (let i = X; i > 0; i--){
    if (S[i][Y] === '#') {
      console.log(count,'d')
     break;
    } else count++;
  }
  console.log(count)
}
// Main(input);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));