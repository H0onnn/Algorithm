function solution(num_list) {
    const arr = [];
    const arr2 = [];

    for (let i = 0; i < num_list.length; i ++) {
        if (num_list[i] % 2 !== 0) {
            arr.push(num_list[i])
        } else {
            arr2.push(num_list[i])
        }
    }
    return (+arr.join('')) + (+arr2.join(''))
}