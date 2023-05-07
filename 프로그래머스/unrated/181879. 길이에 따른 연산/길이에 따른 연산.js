function solution(num_list) {
    const mult = num_list.reduce((acc, cur) => acc * cur);
    
    const sum = num_list.reduce((acc, cur) => acc + cur);
    
    return num_list.length >= 11 ? sum : mult;
}