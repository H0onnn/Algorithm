function solution(num_list) {
    let answer1 = 0;
    let answer2 = 0;
    
    num_list.forEach((v, i) => {
        if (i % 2 === 0) {
            answer1 += v;
        } else {
            answer2 += v;
        }
    })
    return answer1 > answer2 ? answer1 : answer2;
}