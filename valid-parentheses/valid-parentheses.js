/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    const size=s.length;
    for(let i=0;i<size;i++){
        const target = s[i];
        // push
        if(target === '(' || target === '{' || target === '['){
            stack.push(target);
        } else {
            // pop
            if(stack.length === 0) return false;
            const pop = stack.pop();
            if(!((pop === '(' && target === ')') || (pop === '{' && target === '}') || (pop === '[' && target === ']'))) return false;
        }
    }
    
    return stack.length ? false : true;
};