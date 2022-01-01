/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const moveSize = moves.length;
    const size = 3;
    const player = [0,1,2];
    const map = Array.from(Array(size), _=>Array(size).fill(0));
    
    for(let t=0;t<moveSize;t++){
        const [y,x] = moves[t];
        
        // 말 놓기
        map[y][x] = player[t%2+1];

        const rightCnt = [0,0,0]; // 우대각
        const leftCnt = [0,0,0]; // 좌대각
        
        // 가로 세로 승부 확인
        for(let i=0;i<size;i++){
            const garoCnt = [0,0,0];
            const seroCnt = [0,0,0];
            
            for(let j=0;j<size;j++){
                if(map[i][j]) garoCnt[map[i][j]]++;
                if(map[j][i]) seroCnt[map[j][i]]++;
            }
            
            if(garoCnt[1]===size || seroCnt[1]===size) return 'A';
            if(garoCnt[2]===size || seroCnt[2]===size) return 'B';
        }
        
        // 대각 승부 확인
        for(let j=0;j<size;j++){
            if(map[j][j]) rightCnt[map[j][j]]++;
            if(map[j][size-j-1]) leftCnt[map[j][size-j-1]]++;
        }
        
        if(rightCnt[1]===size || leftCnt[1]===size) return 'A';
        if(rightCnt[2]===size || leftCnt[2]===size) return 'B';
    }
    
    // pending 파악
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            if(!map[i][j]) return 'Pending';
        }
    }
    return 'Draw';
};