function sum(n){
    let ans = 0;
    for ( let i = 0 ; i < n+1 ; i++){
        ans = ans + i ;
    }
    return ans;
}
const ans = sum(100);
console.log(ans);