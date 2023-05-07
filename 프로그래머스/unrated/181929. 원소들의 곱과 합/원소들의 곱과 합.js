function solution(num_list) {
    const redc = num_list.reduce((acc, cur) => acc * cur);
    
    const redc2 = num_list.reduce((acc, cur) => acc + cur);
    
    return redc < Math.pow(redc2, 2) ? 1 : 0;
}