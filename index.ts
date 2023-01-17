const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (req: any, res: any) => {
    res.send(await readFile('./index.html', 'utf8'));
});

app.listen(process.env.PORT || 3000);