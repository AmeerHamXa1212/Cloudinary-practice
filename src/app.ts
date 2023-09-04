import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(morgan("dev"));

app.use("/api", routes);

export default app;
