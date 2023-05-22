function solution(num_str) {
    return [...num_str].map(v => +v).reduce((acc, cur) => acc + cur);
}