import * as express from 'express';
import {Application} from "express";
import {getGridTiles} from "./get-tiles.route";
import {saveTiles} from "./save-tiles";


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({origin: true}));

app.route('/api/tiles/:emit_error').get(getGridTiles);
app.route('/api/tiles/:emit_error').put(saveTiles);


const httpServer = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + 9000);
});

