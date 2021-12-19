/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // 키 작은 순서 정렬
    people.sort((a,b)=>a[0]-b[0]);
    
    // 키 순서 순회하면서 조건 여부 파악해서 줄세우기
    const answer = [];
    let waiting = [];
    while(people.length){
        const p = people.shift();
        const h = p[0];
        const k = p[1];
        
        let tallerCnt = 0; // answer에 있는 사람들 중 p보다 크거나 같은 사람의 수
        for(let i=0;i<answer.length;i++){
            if(answer[i][0] >= h) tallerCnt++;
        }
        
        if(tallerCnt >= k){
            answer.push(p);
            people = [...waiting, ...people];
            waiting = [];
            continue;
        }
        
        waiting.push(p);
    }
    
    return answer;
};
