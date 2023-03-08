function solution(age) {
    let alpArr = Array(10).fill().map((v, i) => String.fromCharCode(i + 97));
    let ageStr = age.toString();
    let answer = '';
    
    for (let i = 0; i < ageStr.length; i++) {
        answer += alpArr[ageStr[i]];
    }
    
    return answer;
}