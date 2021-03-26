"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = void 0;
var pino_1 = __importDefault(require("pino"));
var pino_http_1 = __importDefault(require("pino-http"));
var options = {
//   prettyPrint: {
//     ignore: "pid,hostname,time",
//   },
};
var instance = pino_1.default(options);
exports.httpLogger = pino_http_1.default(__assign({}, options));
exports.default = instance;
