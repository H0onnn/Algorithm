function solution(str_list, ex) {
    const newStr = str_list.filter(v => !v.includes(ex));
    
    return newStr.join('');
}