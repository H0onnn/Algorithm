const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    
    for (let v of str) {
        if (v === v.toLowerCase()) {
            answer += v.toUpperCase();
        } else {
            answer += v.toLowerCase();
        }
    }
    
    console.log(answer)
});