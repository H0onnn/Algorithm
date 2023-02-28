function solution(num_list) {
    let val1 = num_list.filter(v => v % 2 === 0).length;
    let val2 = num_list.filter(v => v % 2 !== 0).length;
    return [val1, val2];
}