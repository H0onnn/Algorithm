function solution(n) {
    
    if (n % 2 !== 0) {
        let oddSum = 0;
        for (let i = 1; i <= n; i += 2) {
            oddSum += i;
        } 
        return oddSum;
    } else {
            let evenSum = 0;
            for (let i = 2; i <= n; i += 2) {
                evenSum += i * i;
            }
        return evenSum;
        }
}