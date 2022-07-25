function calculatePagination(sortedResult, pageSize, pageIndex) {
    var results = [];
    if(pageSize === 0 || pageSize < 0 || pageIndex < 0){
        return results;
    }
    while (sortedResult.length) {
        results.push(sortedResult.splice(0, pageSize));
    }
    if (pageIndex < results.length) {
        return results[pageIndex];
    } else {
        return "Page not Found";
    }
}

module.exports = calculatePagination;
