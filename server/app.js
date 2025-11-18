import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { execute } from "./db/dbConfige.js";
import userRoutes from "./routes/userRoute.js";
import questionRoute from "./routes/questionRoute.js";
import answerRoute from "./routes/answerRoute.js";

const app = express();
const port = 5500;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoute);
app.use("/api/answers", answerRoute);

async function start() {
  try {
    await execute("select 'test'");
    console.log("Database connection established");

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error.message);
  }
}

start();
