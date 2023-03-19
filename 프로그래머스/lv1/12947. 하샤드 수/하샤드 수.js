function solution(x) {
    const xStr = x.toString();
    let arr = 0;
    
    for (let i = 0; i < xStr.length; i++) {
        arr += (+xStr[i])
    }
    if (x % arr === 0) {
        return true;
    }
    return false;
}