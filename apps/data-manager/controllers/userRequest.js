const binarySearch = require("./dataSearch");
const jsonData = require("../../../sampleData.json");
const MultiKeyMap = require("multikeymap");
const objectStorage = require("../models/data");
const sortRecords = require("./resultSort");
const calculatePagination = require("./pagination");
const { statusCodes, messages, sendResponse } = require("../../../utils");

//function for user reqeust and resturn sorted result
exports.userSearch = function (req, res) {
    start = Date.now();
    const { tags, sortIndex, pageSize, pageIndex } = req.data;
    // use multikey map DS for sotre tags as a key and object as a value
    const map = new MultiKeyMap();
    try {
        if (tags.length > 0) {
            result = [];
            for (i = 0; i < jsonData.length; i++) {
                let item = new objectStorage(jsonData[i].UUID, jsonData[i].Tags, jsonData[i].Data);
                map.set(jsonData[i].Tags, item);
            }
            const keys = map._keys;
            // search in keys to find all object with user tag request
            // use binarySearch for searching

            for (let index = 0; index < keys.length; ++index) {
                let count = 0;
                keys[index].sort();

                for (let j = 0; j < tags.length; j++) {
                    if (binarySearch(keys[index], tags[j]) != -1) {
                        count++;
                    }
                }
                if (count === tags.length) {
                    result.push(map.get(keys[index]));
                }
            }
           
            if (result.length === 0) {
                sendResponse(res, statusCodes.SUCCESS, messages.SUCCESS, "Data not fount");
            } else {
                //send response to use if all of the things was ok
                sendResponse(
                    res,
                    statusCodes.SUCCESS,
                    messages.SUCCESS,
                    calculatePagination(sortRecords(result, sortIndex), pageSize, pageIndex)
                );
            }
            console.log("time consuming: ", Date.now() - start);
        } else {
            sendResponse(
                res,
                statusCodes.SUCCESS,
                messages.SUCCESS,
                calculatePagination(jsonData, pageSize, pageIndex)
            );
        }
    } catch (err) {
        console.log("Database ", err);
        sendResponse(res, statusCodes.FAILED, messages.FAILED);
    }
};
