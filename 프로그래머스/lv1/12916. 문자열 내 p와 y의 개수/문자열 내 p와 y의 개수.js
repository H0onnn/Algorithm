function solution(s){
    const low = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    
    for (let i = 0; i < low.length; i++) {
        if (low[i] === 'p') {
            pCnt += 1;
        } else if (low[i] === 'y') {
            yCnt += 1;
        }
    }
    if (pCnt === yCnt || pCnt + yCnt === 0) {
        return true;
    } else {
        return false;
    }
}