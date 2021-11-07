/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 우하좌상
const dy=[0,1,0,-1];
const dx=[1,0,-1,0];
var spiralOrder = function(matrix) {
    const answer=[];
    const row=matrix.length;
    const col=matrix[0].length;
    const fin=row*col;
    const visited=Array.from(Array(row), ()=>Array(col).fill(false));
    let y=0,x=-1,d=0,num=1;
    while(num<=fin){
        y+=dy[d];
        x+=dx[d];
        if(y<0||x<0||y>=row||x>=col||visited[y][x]){
            y-=dy[d];
            x-=dx[d];
            d = (d+1)%4;
            continue;
        }
        answer.push(matrix[y][x]);
        visited[y][x]=true;
        num++;
    }
    return answer;
};