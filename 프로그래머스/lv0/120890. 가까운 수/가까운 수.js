function solution(array, n) {
    let min = 0;
    let arr = array.sort((a, b) => a - b);
    let answerArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        answerArr.push(Math.abs(arr[i] - n));
    }
    min = Math.min(...answerArr);
    return arr[answerArr.indexOf(min)];
}
