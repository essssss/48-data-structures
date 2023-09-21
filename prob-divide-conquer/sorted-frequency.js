function sortedFrequency(array, value) {
    // find first instance, find last instance, subtract the indeces
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    let firstIdx;
    let lastIdx;

    if (array[leftIdx] > value || array[rightIdx] < value) {
        return -1;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = array[middleIdx];
        if (middleVal === value && array[middleIdx - 1] < value) {
            firstIdx = middleIdx;
            leftIdx = 0;
            rightIdx = array.length - 1;
            break;
        } else if (middleVal < value) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > value) {
            rightIdx = middleIdx;
        } else if (middleVal === value && array[middleIdx - 1] === value) {
            rightIdx = middleIdx;
        } else {
            firstIdx = 0;
            break;
        }
    }
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = array[middleIdx];
        if (middleVal === value && array[middleIdx + 1] > value) {
            lastIdx = middleIdx;
            break;
        } else if (middleVal < value) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > value) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === value && array[middleIdx + 1] === value) {
            leftIdx = middleIdx + 1;
        } else {
            lastIdx = array.length - 1;
            break;
        }
    }
    return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
