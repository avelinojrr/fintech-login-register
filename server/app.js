import express  from "express";
import morgan from "morgan";

// initialize express
const app = express();

// use morgan to log requests to the console
app.use(morgan("dev"));

export default app;