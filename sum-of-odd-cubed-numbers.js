function cubeOdd(arr) {

    const total = arr
        .map(x => Math.pow(x, 3))
        .filter(num => num % 2 !== 0)
        .reduce((sum, num) => sum + num);

    if (isNaN(total)) {
        return undefined;
    } else {
        return total;
    }
};