/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const size = bills.length;
    let money = {5:0, 10:0, 20:0}
    const converter = [20,10,5];
    let geosrm = 0;
    
    for(let k=0;k<size;k++) {
        const bill = bills[k];
        geosrm += bill-5; // 내가 줘야할 거스름돈
        
        for(let i=0;i<3;i++){
            const k = converter[i]; // 현재 가지고 있는 converter[i]원짜리 동전 k개
            // 현재 줄 수 있는 거스름돈 k가 너무 크다
            if(k > geosrm) continue; // 다음 거스름돈을 보자
            
            const needCnt = parseInt(geosrm/k); // mok개의 k원짜리 거스름돈이 필요함
            const canGiveCnt = money[k]; // 최대 몇 개의 k원을 거스름돈으로 줄 수 있나?
            
            // k원짜리 거스름돈을 줄 수 있다
            if(canGiveCnt - needCnt >= 0) {
                money[k] -= needCnt; // 필요한 거스름돈 만큼 준다
                geosrm -= needCnt*k; // 앞으로 줘야할 거스름돈 업데이트
            }
            // 줄 수 없다
            else {
                // 줄 수 있는 최대한을 주자
                money[k] -= canGiveCnt; // 돈 탈탈털어서 준다
                geosrm -= canGiveCnt*k; // 앞으로 줘야할 거스름돈 업데이트
            }
        }
        
        if(geosrm>0) return false; // 거스름돈을 주지 못했으면 false
        money[bill]++; // 받은 돈 추가
    }
    
    return !geosrm; // 거스름돈이 남아있으면 false, 없으면 true
};