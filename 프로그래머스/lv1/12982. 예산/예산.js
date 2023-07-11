function solution(d, budget) {
    let sum = d.reduce((acc, cur) => acc + cur, 0);
    
    if (sum === budget) {
        return d.length;
    }
    
    if (sum !== budget) {
        while (sum > budget) {
        
        const max = Math.max(...d);
    
        d.splice(d.indexOf(max), 1);
    
        sum = d.reduce((acc, cur) => acc + cur, 0);
    }
    return d.length;
    }
}