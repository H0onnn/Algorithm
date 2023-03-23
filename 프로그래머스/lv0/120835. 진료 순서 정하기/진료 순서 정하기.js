function solution(emergency) {
    const arr = [...emergency];
    
    const sort = arr.sort((a, b) => b - a);
    
    return emergency.map(v => sort.indexOf(v) + 1);
}