/**
 * @param {number} n
 * @return {number[][]}
 */
// 우하좌상
const dy=[0,1,0,-1];
const dx=[1,0,-1,0];
var generateMatrix = function(n) {
    const ary = Array(n);
    for(let i=0;i<n;i++) ary[i] = Array(n);
    
    const fin = n*n;
    let y=0,x=-1,d=0,num=1;
    while(true){
        if(num>fin) break;
        y+=dy[d];
        x+=dx[d];
        if(y<0||x<0||y>=n||x>=n||ary[y][x]){
            y-=dy[d];
            x-=dx[d];
            d = (d+1)%4;
            continue;
        }
        ary[y][x]=num++;
    }
    
    return ary;
};