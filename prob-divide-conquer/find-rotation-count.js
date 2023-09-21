function findRotationCount(array) {
    if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let midpoint = Math.floor((end + start) / 2);
        if (array[midpoint] > array[midpoint + 1]) {
            return midpoint + 1;
        } else if (array[midpoint] <= array[start]) {
            end = midpoint;
        } else {
            start = midpoint + 1;
        }
    }
}
module.exports = findRotationCount;

[15, 18, 2, 3, 6, 12];
