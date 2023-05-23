function solution(s) {
    const sArr = [...s];
    
    return sArr.sort().reverse().join('');
}