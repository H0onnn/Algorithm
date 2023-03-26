function solution(numbers) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const answer = nums
                   .filter(v => !numbers.includes(v))
                   .reduce((a, b) => a + b)
    return answer;
}