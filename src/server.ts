import express from "express";
import initApi from "./api/index";
const port = process.env["PORT"] && Number(process.env["PORT"]) || 80;
const app = express();

initApi(app);

app.use("/", express.static(`${__dirname}/../static`));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
