/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const loopSize = s.length-10+1;
    const map = new Map();
    const answer = [];
    
    for(let i=0;i<loopSize;i++){
        const target = s.substring(i,i+10);
        if(map.has(target)) map.set(target, map.get(target)+1);
        else map.set(target, 1);
    }
    
    for(const [key, value] of map)
        if(value>1) answer.push(key);
    
    return answer;
};