function solution(my_string) {
    // 문자열 코드로 대문자는 65, 소문자는 97부터 시작
    return [...my_string].map(v => v.charCodeAt() >= 65 && v.charCodeAt() < 97 ? v.toLowerCase() : v.toUpperCase()).join("")
}