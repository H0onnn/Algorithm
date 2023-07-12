function solution(myString, pat) {
    const changeAB = myString
.replaceAll("A", "x")
.replaceAll("B", "A")
.replaceAll("x", "B");

    return changeAB.includes(pat) ? 1 : 0;
}