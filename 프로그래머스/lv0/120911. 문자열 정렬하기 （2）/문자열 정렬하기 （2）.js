function solution(my_string) {
    let lower = my_string.toLowerCase();
    let strArr = lower.split('');
    
    return strArr.sort().join('');
}