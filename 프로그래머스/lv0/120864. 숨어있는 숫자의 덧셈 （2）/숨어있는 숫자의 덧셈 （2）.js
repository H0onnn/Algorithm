function solution(my_string) {
    const answer = my_string
                .replace(/[a-z]/gi, 'x')
                .split('x')
                .reduce((a, c) => (+a) + (+c), 0);
    return answer;
}