const messages = {
    SUCCESS: "درخواست موفقیت آمیز بود!",
    FAILED: "درخواست موفقیت آمیز نبود!",
    FORBBIDEN: "درخواست غیر مجاز است!",
};
const statusCodes = {
    SUCCESS: 200,
    NOTAUTHORIZED: 401,
    FAILED: 400,
};

const contentTypes = {
    JSON: "application/json",
};

function setHeaders(res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080/");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
}

function sendResponse(res, status, message, data = {}) {
    // setHeaders(res);
    res.end(JSON.stringify({ statuscode: status, messages: message, result: data }));
}

module.exports = {
    setHeaders,
    sendResponse,
    messages,
    statusCodes,
    contentTypes,
};
