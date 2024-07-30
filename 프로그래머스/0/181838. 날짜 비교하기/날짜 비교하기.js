function formatDate(string) {
    return new Date(string);
}

function solution(date1, date2) {
    const a = formatDate(date1);
    const b = formatDate(date2);
    
    return a < b ? 1 : 0;
}