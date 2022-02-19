/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    
    // s와 goal 이 같은 경우 ab, ab / aa, aa
    if(s===goal){
        const set = new Set([...s]);
        if(set.size===goal.length) return false;
    }
    
    let diffCnt = 0;
    const map = new Map();
    [...s].forEach((char, idx) => {
        if(char!==goal[idx]) diffCnt++; // 문자 다른 갯수 구함
        map.set(char, map.get(char) ? map.get(char)+1 : 1);
        map.set(goal[idx], map.get(goal[idx]) ? map.get(goal[idx]) - 1 : -1);
    });
    
    if(diffCnt>2) return false; // 2개 넘게 다르면 어차피 같을 수 없음
    for(const [key, value] of map){
        if(value>0) return false;
    }
    return true;
};