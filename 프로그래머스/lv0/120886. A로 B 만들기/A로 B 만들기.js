function solution(before, after) {
    const aArr = before.split('').sort().join('');
    const bArr = after.split('').sort().join('');
    
    return aArr === bArr ? 1 : 0; 
}