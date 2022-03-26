/**
 * @param {number} n
 * @return {number}
 */

let dp = [[1,1,1,1,1]];
var countVowelStrings = function(n) {
    const len = dp.length;
    let ret = 0;
    
    if(n==1) {
        for(let i = 0 ; i < 5 ; i++){
            ret += dp[len-1][i];
        }
        dp = [[1,1,1,1,1]];
        return ret;
    }
    
    for(let i = 0 ; i < 5 ; i++){
        if(i===0) dp[len] = [];
        let sum = 0;
        for(let j = i ; j < 5 ; j++){
            sum += dp[len-1][j];
        }
        dp[len].push(sum);
    }
    
    return countVowelStrings(n-1);
};