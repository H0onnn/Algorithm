function solution(score) {
    let answer = [];
    
    for (let i = 0; i < score.length; i++) {
        answer.push((score[i][0] + score[i][1]) / 2);
    }
    const sort = [...answer].sort((a, b) => b - a);
    return answer.map(v => sort.indexOf(v) + 1);
}