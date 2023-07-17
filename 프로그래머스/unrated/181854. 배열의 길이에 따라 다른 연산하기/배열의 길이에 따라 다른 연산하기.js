function solution(arr, n) {
  let isLengthOdd = arr.length % 2 !== 0;

  // 배열 arr를 새로운 배열로 map
  let answer = arr.map((v, i) => {
    // 배열의 길이가 홀수라면 짝수 인덱스에, 배열의 길이가 짝수라면 홀수 인덱스에 n을 +
    if ((isLengthOdd && i % 2 === 0) || (!isLengthOdd && i % 2 !== 0)) {
      return v + n;
    }
    // 조건에 해당하지 않는 인덱스는 원래의 값 유지
    return v;
  });

  // 새로운 배열 반환
  return answer;
}
