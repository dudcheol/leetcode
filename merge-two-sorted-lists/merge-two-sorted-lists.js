/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 첫번째 노드 찾기
    let node = null;
    let t1 = l1, t2 = l2;
    let tmp = [];
    while(t1){
        tmp.push(t1.val);
        t1 = t1.next;
    }
    while(t2){
        tmp.push(t2.val);
        t2 = t2.next;
    }
    tmp = tmp.sort((a,b)=>(a-b));
    
    if(!tmp.length) return null;
    
    const answer = new ListNode(tmp[0], null);
    let target = answer;
    
    for(let i=1;i<tmp.length;i++){
        target.next = new ListNode(tmp[i], null);
        target = target.next;
    }
    
    return answer;
};