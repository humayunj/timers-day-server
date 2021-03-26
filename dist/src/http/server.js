"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var Logger_1 = __importDefault(require("../utils/Logger"));
function start(app) {
    if (process.env.PORT === undefined || process.env.PORT === null) {
        throw new Error("Port is not defined");
    }
    var port = parseInt(process.env.PORT, 10);
    app.listen(port, function () {
        Logger_1.default.info("HTTP server listening on port " + port);
    });
}
exports.start = start;
