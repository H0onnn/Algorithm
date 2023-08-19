function solution(binomial) {
    // 입력 문자열을 공백을 기준으로 분리
    let components = binomial.split(' ');
    
    // a와 b를 정수로 변환
    let a = parseInt(components[0]);
    let b = parseInt(components[2]);
    let op = components[1];

    // 연산자에 따라 결과를 반환
    switch(op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}