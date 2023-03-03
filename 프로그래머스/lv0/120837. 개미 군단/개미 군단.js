function solution(hp) {
    let ant1 = Math.floor(hp / 5);
    let ant2 = Math.floor((hp - (ant1 * 5)) / 3);
    let ant3 = hp - ((ant1 * 5) + (ant2 * 3));
    let answer = ant1 + ant2 + ant3;
    return answer;
}