import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//Routes
import languajeRoutes from "./routes/languaje.routes"

const app = express();

// settings
app.set("port", 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



//Routes
app.use("/api/languaje", languajeRoutes);

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

export default app;

