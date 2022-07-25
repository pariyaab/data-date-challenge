function sortRecords(result, sortIndex) {
    // console.log(result);
    let tag_in_sortIndex = [];
    let remaining_list = [];
    let sortedResult = [];
    for (i = 0; i < result.length; i++) {
        if (result[i].tags.length > sortIndex) {
            tag_in_sortIndex.push(result[i].tags[sortIndex]);
        } else {
            remaining_list.push(result[i]);
            result.splice(i, 1);
        }
    }
    if (tag_in_sortIndex.length > 0) {
        let tags_strings = result.map(function (e, i) {
            return { index: i, value: e.tags[sortIndex].toUpperCase() };
        });
        tags_strings.sort(function (a, b) {
            return a.value > b.value || (a.value === b.value) - 1;
        });
        sortedResult = tags_strings.map(function (e) {
            return result[e.index];
        });
        sortedResult.push.apply(sortedResult, remaining_list);
    }
    return sortedResult;
}

module.exports = sortRecords;
