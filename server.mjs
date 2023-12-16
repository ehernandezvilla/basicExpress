import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Loads JSON file 

import allMap from '../basicExpress/map.json' assert { type: 'json' };

// New instance of express 
const app = express();

// Middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("website"));


const port = 3000;

// Spin up the server
app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`running on localhost: ${port}`);
}

//GET Map data

app.get("/all", (req, res) => {
  res.send(allMap);
});




