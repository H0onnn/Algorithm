function solution(array, n) {
    let answer = array.filter(v => v === n).length
    return answer;
}