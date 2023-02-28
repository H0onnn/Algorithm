function solution(n) {
    let answer = 1;
    
    if (n % 7 === 0) {
        answer = n / 7;
    } else if (n > 7) {
        answer = Math.floor(n / 7) + 1;
    } else {
        return answer;
    }
    return answer;
}