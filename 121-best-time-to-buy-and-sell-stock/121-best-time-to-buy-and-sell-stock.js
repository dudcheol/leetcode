/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Number.MAX_VALUE;
    let sell = 0;
    
    prices.forEach(price => {
        if(price < buy) buy = price;
        sell = Math.max(sell, price - buy);
    });
    
    return sell;
};