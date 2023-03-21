function solution(a, b) {
    let answer = 0;
    
    (a > b) ? myFunc(b, a) : myFunc(a, b);
    
    function myFunc (a, b) {
        for (let i = a; i <= b; i++) {
            answer += i;
        }
    }
    return answer;
}