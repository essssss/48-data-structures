function findRotatedIndex(array, value) {
    let pivot = findPivot(array);
    if (pivot > 0 && value >= array[0] && value <= array[pivot - 1]) {
        return binarySearch(array, value, 0, pivot - 1);
    } else {
        return binarySearch(array, value, pivot, array.length - 1);
    }
}
function binarySearch(array, value, start, end) {
    while (start <= end) {
        let midpoint = Math.floor((start + end) / 2);
        if (array[midpoint] === value) {
            return midpoint;
        } else if (array[midpoint] < value) {
            start = midpoint + 1;
        } else {
            end = midpoint - 1;
        }
    }
    return -1;
}

function findPivot(array) {
    if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let midpoint = Math.floor((end + start) / 2);
        if (array[midpoint] > array[midpoint + 1]) {
            return midpoint + 1;
        } else if (array[midpoint] <= array[start]) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
    }
}
module.exports = findRotatedIndex;
