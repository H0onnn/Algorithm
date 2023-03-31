function solution(A, B) {
    let cnt = 0;
    let aArr = [...A];
    
    for (let i = 0; i < aArr.length; i++) {
        if (aArr.join('') !== B) {
            aArr.unshift(aArr.pop());
            cnt++
        } else if (aArr.join('') === B) {
            return cnt;
        }
    }
    return -1
}