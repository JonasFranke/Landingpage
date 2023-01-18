import fs from "fs";

export async function logDataToFile(data: string) {
    try {
        await fs.promises.appendFile('./log.txt', new Date() + ": " + data + "\n");
        console.log("Request logged to file.");
    } catch (err) {
        console.error(err);
    }
}