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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const { readFile } = require('fs').promises;
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield readFile('./index.html', 'utf8'));
    res.send(yield readFile('./build/output.css', 'utf8'));
}));
console.log("Running...");
app.listen(process.env.PORT || 3000);
