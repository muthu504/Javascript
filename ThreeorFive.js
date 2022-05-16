function numberSum(N) {
    var total = 0;
    for (var i = 1; i <= N; i++) {
        if ((i % 3) && (i % 5) == 0) {
            total += i;
        }
    }
    return total;
}