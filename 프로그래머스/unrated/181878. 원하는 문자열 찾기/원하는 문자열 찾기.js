function solution(myString, pat) {
    const lowString = myString.toLowerCase();
    const lowPat = pat.toLowerCase();
    
    
    return lowString.includes(lowPat) ? 1 : 0;
}