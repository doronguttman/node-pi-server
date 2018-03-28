import express from "express";
import loggingMiddleware from "./middleware/logging";
import staticFilesMiddleware from "./middleware/static-files";
import initApi from "./api/index";

const port = process.env["PORT"] && Number(process.env["PORT"]) || 80;
const app = express();

app.use(loggingMiddleware.logIncoming);

initApi(app);

app.use("/", staticFilesMiddleware.mount(`${__dirname}/../static`));
app.use(loggingMiddleware.logOutgoing);
app.use(loggingMiddleware.logErrors);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
