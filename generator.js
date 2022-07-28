const fs = require("fs");

function uuidv4() {
    var d = new Date().getTime(); //Timestamp
    var d2 =
        (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
}

function tags() {
    const tagsList = [
        "python",
        "javascript",
        "c++",
        "c",
        "java",
        "go",
        "programming",
        "go",
        "date_20221012",
        "date_20120512",
        "date_20000305",
        "date_20221015",
        "mocha testing framework",
        "type_encoded_string",
        "datadate",
        "type_plain_string",
        "deleted",
        "technology",
        "enc_utf",
        "enc_base64",
        "active",
        "part_software_group",
        "date_20180909",
        "date_20230410",
        "isDeleted",
        "false",
        "true",
    ];
    let tags = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * tagsList.length);
        tags[i] = tagsList[randomNumber];
    }
    return tags;
}

function writeFile() {
    for (let i = 0; i < 25000; i++) {
        let obj = {
            UUID: uuidv4(),
            Tags: tags(),
            Data: "Data Date Challenge",
        };
        const data = JSON.stringify(obj);
        try {
            fs.appendFileSync("dataGenerated.json", data);
            fs.appendFileSync("dataGenerated.json", ",");
        } catch (error) {
            console.error(error);
        }
    }
}

writeFile();
