function solution(phone_number) {
    let answer = [];
    
    for (let i = 0; i < phone_number.length - 4; i++) {
        answer.push('*');
    };
    for (let j = phone_number.length - 4 ; j < phone_number.length; j++) {
        answer.push(phone_number[j]);
    }
    return answer.join('');
}