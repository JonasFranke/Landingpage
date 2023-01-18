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
const express = require('express');
const app = express();
const fs_1 = __importDefault(require("fs"));
app.use(express.static('./build'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log('GET from' + req.ip);
    try {
        if ((_a = req.header('User-Agent')) === null || _a === void 0 ? void 0 : _a.includes('Mobile')) {
            console.log('Mobile');
            res.status(500).send("Mobile site still in development");
        }
        else {
            console.log('Desktop');
            const html = yield fs_1.default.promises.readFile('./index.html', 'utf8');
            res.send(html);
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }
}));
console.log("Running... http://localhost:" + process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
