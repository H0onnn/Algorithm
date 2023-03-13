function solution(array, n) {
    let min = 0; // 최솟값 저장할 변수 선언
    let arr = array.sort((a, b) => a - b); // input 배열을 오름차순으로 정렬
    // why ? 만약 ([12, 9, 11], 10) 과 같이 들어올 경우, 더 작은 값을 출력하기 위함
    let answerArr = []; // 절대값을 저장할 배열 변수 선언
    
    for (let i = 0; i < arr.length; i++) { // 오름차순 정렬된 배열의 값을 for 루프 돌림
        answerArr.push(Math.abs(arr[i] - n));
    } // 배열의 값 - n을 절대값으로 변환하여 answerArr 배열에 저장
    min = Math.min(...answerArr); // answerArr 배열에 저장된 값 중 최솟값
    return arr[answerArr.indexOf(min)]; // arr 배열에서 answerArr중 최솟값이 담긴 index의 값 출력
}