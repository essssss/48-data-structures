function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[rightIdx] <= val) {
        return arr[rightIdx];
    }
    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (
            (middleVal < val && arr[middleIdx + 1] > val) ||
            middleVal === val
        ) {
            return middleVal;
        } else if (middleVal < val && arr[middleIdx + 1] < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findFloor;
