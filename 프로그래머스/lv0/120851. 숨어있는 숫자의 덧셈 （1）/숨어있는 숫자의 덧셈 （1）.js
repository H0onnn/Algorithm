function solution(my_string) {
    let arr = my_string.split('').map(v => Number(v)).filter(v => !isNaN(v))
    let answer = arr.reduce((a, c) => a + c);
    return answer;
}