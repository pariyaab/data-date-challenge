const mergeSort = require("./dataSort");
function sortRecords(result, sortIndex) {
    let tagsInSortIndex = [];
    let remainingList = [];
    let sortedResult = [];
    for (i = 0; i < result.length; i++) {
        if (result[i].tags.length > sortIndex) {
            const obj = { index: i, value: result[i].tags[sortIndex] };
            tagsInSortIndex.push(obj);
        } else {
            remainingList.push(result[i]);
        }
    }
    if (tagsInSortIndex.length > 0) {
        sortedTags = mergeSort(tagsInSortIndex);
        sortedResult = sortedTags.map(function (e) {
            return result[e.index];
        });

        sortedResult.push.apply(sortedResult, remainingList);
    }

    return sortedResult;
}

module.exports = sortRecords;
