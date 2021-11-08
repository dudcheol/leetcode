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
    let answer = new ListNode();
    let tmp = answer;
    let t1=l1, t2=l2;
    
    while(t1 && t2){
        if(t1 && t2){
            if(t1.val > t2.val){
                tmp.next = t2; // tmp.next에 t2 객체의 주소를 할당
                t2 = t2.next; // t2에 t2.next 객체의 주소를 할당
                // 객체 내부를 건드리는 것이 아니라 할당된 주소를 바꾸는 형태이므로
                // t2에 t2.next의 주소를 할당한다고 해서 tmp.next가 변하는 것은 아님
                // 만약, t2 객체 내부를 건드렸다면 tmp.next 객체의 내부도 변할 것임
            } else {
                tmp.next = t1;
                t1 = t1.next;
            }
            tmp = tmp.next;
        }
    }
    
    if(!t1){
        tmp.next = t2;
    }
        
    if(!t2){
        tmp.next = t1;
    }
    
    return answer.next;
};