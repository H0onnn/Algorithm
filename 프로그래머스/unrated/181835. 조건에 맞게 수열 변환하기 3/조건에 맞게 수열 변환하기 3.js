function solution(arr, k) {
    if(k % 2 === 0) {
        return arr.map(v => v + k);
    } return arr.map(v => v * k);
};