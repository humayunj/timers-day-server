"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendAPIResponse(res, _a) {
    var data = _a.data, error = _a.error;
    return res.json({
        statusCode: res.statusCode,
        data: data,
        error: error,
    });
}
exports.default = sendAPIResponse;
