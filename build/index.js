"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const log_1 = require("./log");
const app = (0, express_1.default)();
app.use(express_1.default.static('./build'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log('GET from' + req.ip);
    try {
        let statusCode;
        if ((_a = req.header('User-Agent')) === null || _a === void 0 ? void 0 : _a.includes('Mobile')) {
            const html = yield fs_1.default.promises.readFile('./src/index-mobile.html', 'utf8');
            statusCode = 200;
            res.status(statusCode).send(html);
        }
        else {
            const html = yield fs_1.default.promises.readFile('./src/index.html', 'utf8');
            statusCode = 200;
            res.status(statusCode).send(html);
        }
        yield (0, log_1.logDataToFile)(statusCode + ": User-Agent: " + req.header('User-Agent'));
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
        yield (0, log_1.logDataToFile)(500 + ": " + e);
    }
}));
console.log("Running... http://localhost:" + process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
