function solution(a, b) {
    let answer = 0;
    
    const forA = a % 2 !== 0 ? 1 : 0;
    const forB = b % 2 !== 0 ? 1 : 0;
    
    if (forA === 1 && forB === 1) {
        return answer = Math.pow(a, 2) + Math.pow(b, 2);
    }
    
    if (forA === 1 || forB === 1) {
        return answer = 2 * (a + b);
    }
    
    if (forA !== 1 && forB !== 1) {
        return answer = Math.abs(a - b);
    }
}