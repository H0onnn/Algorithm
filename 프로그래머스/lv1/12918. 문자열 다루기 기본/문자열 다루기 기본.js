function solution(s) {
  // 입력값이 숫자로만 이루어져 있지 않은 경우 false 반환
  if (/[^0-9]/.test(s)) {
    return false;
  }
  
  // 입력값의 길이가 4 또는 6이 아닌 경우 false 반환
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  // 모든 검사를 통과한 경우 true 반환
  return true;
}
