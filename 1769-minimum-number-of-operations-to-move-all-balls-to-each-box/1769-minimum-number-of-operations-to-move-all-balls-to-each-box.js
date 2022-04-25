/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const boxSize = boxes.length;
    const answer = new Array(boxSize).fill(0);
    
    const ballIndexs = [];
    for(let i=0;i<boxSize;i++){
        if(boxes[i]==='1') ballIndexs.push(i); 
    }
    
    const ballIndexSize = ballIndexs.length;
    for(let i=0;i<boxSize;i++){
        for(let j=0;j<ballIndexSize;j++){
            answer[i] += Math.abs((ballIndexs[j] - i));
        }
    }
    
    return answer;
};