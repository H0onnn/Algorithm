function solution(num_list) {
    let cnt = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            return num_list.indexOf(num_list[i])
        } else {
            cnt++;
        }
        if (cnt === num_list.length) {
            return -1;
        }
    }
}