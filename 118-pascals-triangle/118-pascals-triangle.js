/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [[1]];
    
    for(let i=1 ; i<numRows ; i++){
        const tmp = [1];
        for(let j=1 ; j<=i-1 ; j++){
            tmp.push(dp[i-1][j-1] + dp[i-1][j]);
        }
        tmp.push(1);
        dp.push(tmp);
    }
    
    return dp;
};