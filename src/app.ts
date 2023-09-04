import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(morgan("dev"));

app.use("/api", routes);
app.use(errorHandler);

export default app;
