const { QuickInsertionSort, QuickInsertionSortWithoutObject } = require("./dataSort");
function sortRecords(result, sortIndex) {
    let tag_in_sortIndex = [];
    let remaining_list = [];
    let sortedResult = [];
    for (i = 0; i < result.length; i++) {
        if (result[i].tags.length > sortIndex) {
            const obj = { index: i, value: result[i].tags[sortIndex] };
            tag_in_sortIndex.push(obj);
        } else {
            remaining_list.push(result[i]);
        }
    }
    if (tag_in_sortIndex.length > 0) {

        // tag_in_sortIndex.sort(function (a, b) {
        //     return a.value > b.value || (a.value === b.value) - 1;
        // });

        tags_strings = QuickInsertionSort(tag_in_sortIndex);

        sortedResult = tag_in_sortIndex.map(function (e) {
            return result[e.index];
        });
        sortedResult.push.apply(sortedResult, remaining_list);
    }
    return sortedResult;
}

module.exports = sortRecords;
