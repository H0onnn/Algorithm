function solution(left, right) {
    const arr = Array(right - left + 1).fill().map((_, idx) => left + idx);
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let arr2 = [];
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                arr2.push(j);
            }
        }  
        if (arr2.length % 2 === 0) {
            answer += arr[i];
        } else {
            answer -= arr[i];
        }     
    }
    return answer;
}
