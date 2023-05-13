function solution(numbers, n) {
  let sum = 0;

  numbers.some((number) => {
    sum += number;
    return sum > n;
  });

  return sum;
}