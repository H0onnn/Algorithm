function solution(a, b) {
    const arrA = (a+'') + (b+'');
    const arrB = (b+'') + (a+'');
    
    return arrA > arrB ? +arrA : +arrB;
}