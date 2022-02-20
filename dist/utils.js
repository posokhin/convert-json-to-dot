"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromFile = exports.isDirectoryExists = exports.isFileExists = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const consola_1 = __importDefault(require("consola"));
const isFileExists = (p) => {
    let isFileExist = false;
    try {
        isFileExist = fs_1.default.statSync(path_1.default.resolve(p)).isFile();
    }
    catch (e) {
        consola_1.default.error(e);
    }
    return isFileExist;
};
exports.isFileExists = isFileExists;
const isDirectoryExists = (p) => {
    let result = false;
    try {
        result = fs_1.default.existsSync(path_1.default.resolve(p));
    }
    catch (e) {
        consola_1.default.error(e);
    }
    return result;
};
exports.isDirectoryExists = isDirectoryExists;
const getDataFromFile = (p) => {
    let data = null;
    try {
        data = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(p), { encoding: 'utf-8' }));
    }
    catch (e) {
        consola_1.default.error(e);
    }
    return data;
};
exports.getDataFromFile = getDataFromFile;
