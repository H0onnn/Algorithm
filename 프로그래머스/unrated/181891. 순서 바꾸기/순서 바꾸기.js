function solution(num_list, n) {
    const answer = num_list.filter((_, i) => i >= n);
    
    for (let i = 0; i < num_list.length; i++) {
        if (i < n) {
            answer.push(num_list[i]);
        }
    }
    
    return answer;
}