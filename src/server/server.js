import { MongoClient } from 'mongodb';
import path from 'path';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import './initialize-db';

let port = process.env.PORT || 7777;
let app = express();

app.listen(port, console.info('Server running, listening on port ', port));

app.get('/', (req, res) => {
  res.send('hello');
});
