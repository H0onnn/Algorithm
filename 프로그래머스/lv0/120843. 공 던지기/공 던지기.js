function solution(numbers, k) {
    const len = numbers.length;
    let cnt = 0;
    
    for (let i = 0; i < k * len; i += 2) {
        cnt ++;
        
        if (cnt === k) {
            return numbers[i % len]
        }
    }
}