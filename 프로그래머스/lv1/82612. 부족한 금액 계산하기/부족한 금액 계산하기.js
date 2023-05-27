function solution(price, money, count) {
    let answer = 0;
    const plus = price;
    
    for (let i = 1; i <= count; i++) {
        answer += price;
        price += plus
    } if (answer - money === 0 || answer - money < 0) {
        return 0;
    } else {
        return answer - money;
    }
}