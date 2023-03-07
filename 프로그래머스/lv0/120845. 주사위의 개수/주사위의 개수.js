function solution(box, n) {
    let answer = [];
    
    for (let i = 0; i < box.length; i++) {
         answer.push(Math.floor(box[i] / n));
    }
    return answer[0] * answer[1] * answer[2];
}