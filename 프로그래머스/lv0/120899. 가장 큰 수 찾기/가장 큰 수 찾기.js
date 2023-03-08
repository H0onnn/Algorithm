function solution(array) {
    var answer = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === Math.max(...array)) {
            answer.push(array[i]);
            answer.push(array.indexOf(array[i]));
        }
    }
    return answer;
}