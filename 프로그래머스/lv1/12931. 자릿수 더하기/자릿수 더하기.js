function solution(n)
{   let answer = 0;
    const arr = n.toString().split('');
    
    for (let i = 0; i < arr.length; i++) {
        answer += +arr[i];
    }
    return answer;
}