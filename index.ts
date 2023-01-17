const express = require('express');
const app = express();
const { readFile } = require('fs').promises;
import path from 'path';

app.use(express.static(__dirname + '/public'));

app.get('/', async (req: any, res: any) => {
    res.send(await readFile('./index.html', 'utf8'));
    res.send(await readFile('./build/output.css', 'utf8'))
});

console.log("Running...");

app.listen(process.env.PORT || 3000);