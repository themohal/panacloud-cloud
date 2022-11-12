function recFact(x) {
    if (x === 0) {
        return 1
    }
    else {
        return x * recFact(--x)
    }
}
console.log(recFact(5))