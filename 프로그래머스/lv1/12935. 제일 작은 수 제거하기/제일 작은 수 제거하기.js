function solution(arr) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== Math.min(...arr)) {
            answer.push(arr[i]);
        } else if (arr.length === 1) {
            answer.push(-1);
        }
    }
    return answer;
}