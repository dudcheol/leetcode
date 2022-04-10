/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const KING = 1;
const QUEEN = 2;
const dy = [-1,-1, 0, 1, 1, 1, 0,-1];
const dx = [ 0, 1, 1, 1, 0,-1,-1,-1];

const isOutOfMap = (y, x) => y<0 || x<0 || y>=8 || x>=8;

var queensAttacktheKing = function(queens, king) {
    const answer = [];
    
    // 맵 만들기
    const map = Array.from(Array(8), ()=>Array(8).fill(0));
    
    // 킹, 퀸 맵에 위치시키기
    map[king[0]][king[1]] = KING;
    queens.forEach(([y,x]) => {
        map[y][x] = QUEEN;
    });
    
    // 시뮬레이션
    queens.forEach(([y,x]) => {
        for(let d=0; d<8; d++){
            let ny = y;
            let nx = x;
            while(true) {
                ny += dy[d];
                nx += dx[d];
                if(isOutOfMap(ny, nx) || map[ny][nx] === QUEEN) break;
                if(map[ny][nx] === KING) {
                    answer.push([y,x]);
                    break;
                }
            }
        }
    });
    
    return answer;
};