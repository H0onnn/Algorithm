function solution(arr) {
    const result = Array.from(arr, v => Array(v).fill(v)).flat();
    
    return result;
}