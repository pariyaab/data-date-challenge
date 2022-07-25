const mergeSort = require("./dataSort");
const binarySearch = require("./dataSearch");
const jsonData = require("../../../sampleData.json");
const MultiKeyMap = require("multikeymap");
const objectStorage = require("../models/data");
const sortRecords = require("./resultSort");
const calculatePagination = require("./pagination");
const { statusCodes, messages, sendResponse } = require("../../../utils");

exports.userSearch = function (req, res) {
    console.log(req.data);
    const { tags, sortIndex, pageSize, pageIndex } = req.data;
    const map = new MultiKeyMap();
    try {
        if (tags.length > 0) {
            result = [];
            for (i = 0; i < jsonData.length; i++) {
                let item = new objectStorage(jsonData[i].UUID, jsonData[i].Tags, jsonData[i].Data);
                map.set(jsonData[i].Tags, item);
            }
            const keys = map._keys;
            for (let index = 0; index < keys.length; ++index) {
                let count = 0;
                keys[index] = mergeSort(keys[index]);
                for (let j = 0; j < tags.length; j++) {
                    if (binarySearch(keys[index], tags[j]) != -1) {
                        count++;
                    }
                }
                if (count === tags.length) {
                    result.push(map.get(keys[index]));
                }
            }
            sendResponse(
                res,
                statusCodes.SUCCESS,
                messages.SUCCESS,
                calculatePagination(sortRecords(result, sortIndex), pageSize, pageIndex)
            );
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
