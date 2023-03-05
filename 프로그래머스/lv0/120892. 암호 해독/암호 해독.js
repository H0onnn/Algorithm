function solution(cipher, code) {
    return [...cipher].filter((_,$)=>($+1)%code ===0).join('');
}