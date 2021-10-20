/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let answer = -1;
    
    const hsize = haystack.length;
    const nsize = needle.length;
    
    let start = 0;
    
    loop: while(start+nsize <= hsize){
        for(let i=0 ; i<nsize ; i++){
            if(haystack[start+i] !== needle[i]){
                start++;
                continue loop;
            }
        }
        answer = start;
        break;
    }
    
    
    return answer;
};