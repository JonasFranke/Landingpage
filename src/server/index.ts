import {Request, Response} from "express";
import express from "express";
import fs from 'fs';
import {logDataToFile} from "./log";
const app = express();

app.use(express.static('./build/webpage'));

app.get('/', async (req: Request, res: Response) => {
    console.log('GET from' + req.ip);

    try {
        let statusCode: number;
        if (req.header('User-Agent')?.includes('Mobile')) {
            const html = await fs.promises.readFile('./src/webpage/index-mobile.html', 'utf8');
            statusCode = 200;
            res.status(statusCode).send(html);
        } else {
            const html = await fs.promises.readFile('./src/webpage/index.html', 'utf8');
            statusCode = 200;
            res.status(statusCode).send(html);
        }

        await logDataToFile(statusCode + ": User-Agent: " + req.header('User-Agent'));

    } catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
        await logDataToFile(500 + ": " + e);
    }

});

console.log("Running... http://localhost:" + process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);

