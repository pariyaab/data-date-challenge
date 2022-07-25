function mergeSort(array) {
    let length = array.length,
        mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);

    if (length === 1) {
        return array;
    }

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sorted = [],
        i = 0,
        j = 0;

    while (i < left.length || j < right.length) {
        if (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                sorted.push(left[i]);
                i++;
            } else {
                sorted.push(right[j]);
                j++;
            }
        } else if (i < left.length) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    return sorted;
}

module.exports = mergeSort