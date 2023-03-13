function solution(my_string) {
    let answer = [];
    let arr = my_string.split('');
    
    for (v of arr) {
        if (!answer.includes(v)) answer.push(v);
    }
    return answer.join('');
}