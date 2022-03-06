/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const list = [];
    
    if(n==1){
        list.push(new TreeNode(0, null, null));
        return list;
    }
    
    const rn = n-1;
    for(let i=1 ; i<rn ; i+=2){
        const leftSubtree = allPossibleFBT(i);
        const rightSubtree = allPossibleFBT(rn - i);
        for(const left of leftSubtree){
            for(const right of rightSubtree){
                const node = new TreeNode(0, null, null);
                node.left = left;
                node.right = right;
                list.push(node);
            }
        }
    }
    
    return list;
};