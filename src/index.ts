import cors from "cors";
import express, { Application } from "express";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import * as bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import helmet from "helmet"; // Security

const PORT = process.env.PORT || 8000;

const app: Application = express();


app.use(cors());

// Parse Body of Request
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Logger
// app.use(morgan("combined"));
//app.use(morganMiddleware);

// Settings static folder
app.use(express.static("public"));

app.use(
    ["/docs", "/swagger"],
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

// setting request header
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    next();
});

//app.use(Router);
RegisterRoutes(app);

app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log("Server is running on port", PORT);
});
