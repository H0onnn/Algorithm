function solution(babbling) {
    var answer = 0;
    const basicWords = ["aya", "ye", "woo", "ma"];
    
    for (let b of babbling) {
        let check = b;
        
        for (let word of basicWords)
            check = check.replace(word, ' ');
            
            check = check.replaceAll(' ', '');
            
            if (check === '')
                answer += 1;
        }
    
    return answer;
}