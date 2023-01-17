import {Request, Response} from "express";
const express = require('express');
const app = express();
import fs from 'fs';

app.use(express.static('./build'));

app.get('/', async (req: Request, res: Response) => {
    console.log('GET from' + req.ip);

    try {
        if (req.header('User-Agent')?.includes('Mobile')) {
            console.log('Mobile');
            res.status(500).send("Mobile site still in development");
        } else {
            console.log('Desktop');
            const html = await fs.promises.readFile('./index.html', 'utf8');
            res.send(html);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }

});

console.log("Running... http://localhost:" + process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);
