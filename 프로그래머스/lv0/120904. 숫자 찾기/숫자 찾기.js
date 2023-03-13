function solution(num, k) {
    let numStr = num.toString();
    let strArr = numStr.split('');
    
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === k.toString()) {
            return +numStr.indexOf(k) + 1;
        } else if (!strArr.includes(k.toString())) {
            return -1;
        }
    }
}