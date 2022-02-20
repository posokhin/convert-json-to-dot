#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const fs = __importStar(require("fs"));
const consola_1 = __importDefault(require("consola"));
const minimist_1 = __importDefault(require("minimist"));
const utils_1 = require("./utils");
const convert_1 = require("./convert");
const path_1 = __importDefault(require("path"));
const argv = (0, minimist_1.default)(process.argv.slice(2));
const init = (args, callback) => {
    if (!args.from) {
        consola_1.default.error('You need to pass from');
    }
    if (!args.to) {
        consola_1.default.error('You need to pass to');
    }
    if (args.from && args.to) {
        if ((0, utils_1.isFileExists)(args.from) && (0, utils_1.isDirectoryExists)(args.to)) {
            callback(args.from, args.to);
        }
    }
};
exports.init = init;
(0, exports.init)(argv, (from, to) => {
    try {
        const newJson = JSON.stringify((0, convert_1.convert)((0, utils_1.getDataFromFile)(from)), null, 4);
        fs.writeFileSync(to + '/result.json', newJson);
        consola_1.default.success('conversion was successful');
        consola_1.default.success(`the converted file is in ${path_1.default.join(to, '/result.json')}`);
    }
    catch (e) {
        consola_1.default.error(e);
    }
});
