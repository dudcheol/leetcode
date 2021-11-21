/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // iteratively
    let pre = null;
    while(head){
        const headNext = head.next; // 다음 head 기억
        head.next = pre; // head.next가 이전 노드를 가리키도록 함 (reverse)
        pre = head; // 다음 순회를 위해 pre를 현재 노드로 변경
        head = headNext; // head를 다음 노드로 변경
    }
    return pre;
};