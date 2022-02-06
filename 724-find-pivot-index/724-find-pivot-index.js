/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const size = nums.length;
    const psize = size+1;
    
    const p = Array.from(Array(psize), ()=>0);
    
    // 미리 합 구하기
    for(let i=0;i<psize;i++)
        for(let j=0;j<i;j++) 
            p[i] += nums[j];
    
    // pivot index 찾기
    for(let i=0;i<size;i++){
        const left = p[i];
        const right = p[size] - p[i] - nums[i];
        if(left===right) return i;
    }
    
    return -1;
};