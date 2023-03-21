function solution(s) {
    const sArr = s.split('').sort();
    let answer = '';
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== sArr[i - 1] && sArr[i] !== sArr[i + 1]) {
            answer += sArr[i];
        }
    }
    return answer.length === 0 ? '' : answer;
}