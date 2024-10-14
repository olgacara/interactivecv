import express from "express";
import ViteExpress from "vite-express";
import fs from 'fs';
import path from 'path';
import { CV } from "./types.js";

const app = express();

app.get("/api/ping", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

// Add error handling
app.get("/api/fetchCvInfo/:id", (req, res) => {
  const jsonArray: CV[] = [];
  const cvs = fs.readdirSync("./src/server/cvs");

  cvs.forEach(file => {
    if (path.extname(file) === '.json') {
      // Read and parse the JSON file
      const filePath = path.join("./src", "server", "cvs", file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      jsonArray.push(JSON.parse(fileContent));
    }
  });

  const foundCV = jsonArray.find(cv => cv.id === Number(req.params.id));

  if (foundCV) {
    res.send(foundCV);
  } else {
    res.status(404).send({ error: "CV not found" });
  }
});

app.get("/api/fetchCvsList", (req, res) => {
  const jsonArray: CV[] = [];
  const cvs = fs.readdirSync("./src/server/cvs");

  cvs.forEach(file => {
    if (path.extname(file) === '.json') {
      // Read and parse the JSON file
      const filePath = path.join("./src", "server", "cvs", file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      jsonArray.push(JSON.parse(fileContent));
    }
  });

  res.send(jsonArray)
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
