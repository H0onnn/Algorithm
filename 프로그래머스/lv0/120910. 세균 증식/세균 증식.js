function solution(n, t) {
    let answer = 0;
    
    for (let i = 1; i <= t; i++) {
        n = n *= 2;
    }
    return n;
}