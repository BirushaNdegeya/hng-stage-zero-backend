import express from "express";
import dotenv from "dotenv";
import { getFact } from "./utils/get-fact.js";

const app = express();
dotenv.config({ quiet: true });
const port = process.env.PORT;
const base = process.env.FUN_FACT_API;

app.get("/", function (_, res) {
  res.status(200).json({
    message: "HNG Stage Zero Backend Task API is running 🚀",
    nextStep: "Go to /me endpoint to view profile with dynamic cat facts",
    documentation: "Check README for API usage guidelines",
  });
});

app.get("/me", async function (_, res) {
  const fact = await getFact(base);
  res.status(200).json({
    status: "success",
    user: {
      email: "birushandegeya@gmail.com",
      name: "Birusha Ndegeya",
      stack: "NodeJS/ExpressJS, JavaScript/NextJS",
    },
    timestamp: "<current UTC time in ISO 8601 format>",
    fact: fact,
  });
});

app.listen(port, function () {
  console.log(`
==========================================
APP [STATUS:RUNNING] ON PORT ::: ${port}
==========================================
  `);
});
