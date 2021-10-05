/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const cnts = {};
    
    nums.forEach(num=>{
        if(cnts.hasOwnProperty(num)){
            cnts[num]++;
        }else{
            cnts[num]=1;
        }
    });
    
    const arr = [];
    for(c in cnts){
        arr.push([c, cnts[c]]);
    }
    
    arr.sort((a,b)=>(b[1]-a[1]));
    
    return arr[0][0];
};