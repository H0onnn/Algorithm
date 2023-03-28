function solution(n) {
    const answer = [];
    
    for(let i = 2; i <= n; i++) {
        while(n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    console.log(answer)
    return [...new Set(answer)];
}