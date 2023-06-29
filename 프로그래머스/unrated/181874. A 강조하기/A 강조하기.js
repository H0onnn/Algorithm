function solution(myString) {
    const arr = myString.split('');
    
    const answer = arr.map(v => {
        if (v === 'a') {
            return 'A';
        }
        if (v === 'A') {
            return v;
        }
        return v.toLowerCase();
    });                    
    return answer.join('');
}
