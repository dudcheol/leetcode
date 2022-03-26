/**
 * @param {number} n
 * @return {number}
 */

const ALPHA = ['a','e','i','o','u'];

var countVowelStrings = function(n) {
    
    const backtracking = (lastChar, len) => {
        if(len===0) return 1;
        
        let ret = 0;
        for(let i=0;i<5;i++){
            if(ALPHA[i] >= lastChar) {
                ret += backtracking(ALPHA[i], len-1);
            }
        }
        
        return ret;
    }
    
    const answer = backtracking(ALPHA[0], n);
    
    return answer;
};