function solution(order) {
    var answer = 0;
    let orderStr = order.toString();
    
    for (let i = 0; i < orderStr.length; i++) {
        if (orderStr[i] === '3') {
            answer += 1;
        } else if (orderStr[i] === '6') {
            answer += 1;
        } else if (orderStr[i] === '9') {
            answer += 1;
        }
    }
    return answer;
}