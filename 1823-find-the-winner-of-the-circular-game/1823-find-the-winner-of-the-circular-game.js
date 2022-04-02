/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const players = Array.from(Array(n), (_,i)=>i+1);
    
    let idx = 0;
    while(players.length > 1)
        players.splice(idx = (idx + k - 1) % players.length, 1);
    
    return players[0];
};