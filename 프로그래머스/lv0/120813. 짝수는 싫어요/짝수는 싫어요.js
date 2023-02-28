function solution(n) {
    var answer = Array(n).fill(1).map((v,i)=> i+v).filter(v => v % 2 !== 0);
    return answer;
}