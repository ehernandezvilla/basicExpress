import map from "../basicExpress/map.json";

/* Empty JS object to act as endpoint for all routes */
const projectData = {};

/* Express to run server and routes */
import express from "express";

/* Start up an instance of app */
const app = express();

/* Dependencies */
import bodyParser from "body-parser";
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import cors from "cors";
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 3000;
/* Spin up the server*/
app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}

// GET all animals

app.get("/map", function (req, res) {
  res.send(map);
});
