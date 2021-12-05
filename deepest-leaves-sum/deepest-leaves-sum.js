/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let depths = [];

var deepestLeavesSum = function(root) {
    depths = [];
    dfs(root, 0);
    return depths[depths.length-1];
};

function dfs(node, depth){
    if(!node) return;
    depths[depth] = depths[depth] ? depths[depth] + node.val : node.val;
    dfs(node.left, depth+1);
    dfs(node.right, depth+1);
}