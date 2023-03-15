function solution(s) {
    var answer = 0;
    let inputArr = s.split(' ');
    
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] !== 'Z') {
            answer += +inputArr[i];
        } else if (inputArr[i] === 'Z') {
            answer -= +inputArr[i - 1];
        }
    }
    return answer;
}