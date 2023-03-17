function solution(i, j, k) {
    let arr1 = [];
    let answer = 0;
    for (let x = i; x <= j; x++) {
        arr1.push(x);
        }
    return arr1.join('').split('').filter(v => v === k.toString()).length;
}