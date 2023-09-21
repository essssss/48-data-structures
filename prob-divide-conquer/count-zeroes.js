function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[rightIdx] === 1) {
        return 0;
    } else if (arr[leftIdx] === 0) {
        return arr.length;
    }

    let firstZero;
    while (leftIdx <= rightIdx) {
        let middle = Math.floor((rightIdx - leftIdx) / 2) + leftIdx;
        if (arr[middle] === 0) {
            console.log(arr[middle]);
            if (arr[middle - 1] === 1) {
                console.log(arr[middle - 1]);
                firstZero = middle;
                break;
            } else {
                rightIdx = middle;
            }
        } else if (arr[middle] === 1) {
            if (arr[middle + 1] === 0) {
                firstZero = middle + 1;
                break;
            } else {
                leftIdx = middle + 1;
            }
        } else {
            return "help";
        }
    }
    return arr.length - firstZero;
}
module.exports = countZeroes;
