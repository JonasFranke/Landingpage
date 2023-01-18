import {request, Request, Response} from "express";
const express = require('express');
const app = express();
import fs from 'fs';

app.use(express.static('./build'));

async function logDataToFile(data: string) {
    try {
      await fs.promises.appendFile('log.txt', data);
      console.log("Request logged to file.");
    } catch (err) {
      console.error(err);
    }
}

app.get('/', async (req: Request, res: Response) => {
    console.log('GET from' + req.ip);

    try {
        let statusCode: number;
        if (req.header('User-Agent')?.includes('Mobile')) {
            console.log('Mobile');
            statusCode = 503;
            logDataToFile(statusCode + ": User-Agent: " + req.header('User-Agent'));
            res.status(statusCode).send("Mobile site still in development");
        } else {
            console.log('Desktop');
            const html = await fs.promises.readFile('./index.html', 'utf8');
            statusCode = 200;
            logDataToFile(statusCode + ": User-Agent: " + req.header('User-Agent'));
            res.status(statusCode).send(html);
        }

    } catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
        await logDataToFile(500 + ": " + e);
    }

});

console.log("Running... http://localhost:" + process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);

