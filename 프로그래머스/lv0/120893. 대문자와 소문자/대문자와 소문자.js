function solution(my_string) {
    // 문자열 코드로 대문자는 65, 소문자는 97부터 시작
    return [...my_string] // 전개 연산자를 이용한 input 값 복사
        .map(v => // map 메서드로 my_String의 값을 하나하나 받아, 새로운 배열로 만듬
        v.charCodeAt() >= 65 && // charCodeAt을 이용하여 my_String 문자들의 문자열 코드                                    반환, 문자열 코드로 대문자는 65, 소문자는 97부터 시작함 
        v.charCodeAt() < 97 ? 
        v.toLowerCase() : // 삼항연산자를 이용하여 문자열 코드가 65이상, 97 미만인 문자는 Low                              erCase, 98 부터는 UpperCase 시켜줌
        v.toUpperCase())
        .join("") // map을 이용하여 배열로 반환된 값을 join을 통해 하나의 문자열로 변환
}