import express from "express";
const app = express();
const port = process.env["PORT"] && Number(process.env["PORT"]) || 80;

app.use("/", express.static(`${__dirname}/../static`));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
