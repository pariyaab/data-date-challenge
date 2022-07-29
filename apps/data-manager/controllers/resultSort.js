const quickSort = require("./quicksort");
function sortRecords(result, sortIndex) {
    let tagsInSortIndex = [];
    let remainingList = [];
    let sortedResult = [];
    //extract all index from tags arryas
    for (i = 0; i < result.length; i++) {
        if (result[i].tags.length > sortIndex) {
            const obj = { index: i, value: result[i].tags[sortIndex] };
            tagsInSortIndex.push(obj);
        } else {
            remainingList.push(result[i]);
        }
    }
    if (tagsInSortIndex.length > 0) {
        // sort tags array based on selected index by user
        sortedTags = quickSort(tagsInSortIndex, 0, tagsInSortIndex.length - 1);
        sortedResult = sortedTags.map(function (e) {
            return result[e.index];
        });

        sortedResult.push.apply(sortedResult, remainingList);
    }

    return sortedResult;
}

module.exports = sortRecords;
