global.mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const crypto = require('crypto');
const session = require('express-session');
const connectMongo = require('connect-mongo')(session);

app.use(express.json());

app.use(express.static(path.join(__dirname, './www')));

const atlasURL = "mongodb+srv://dbUser:dbUser123459@phcluster.7zsbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

global.mongoose.connect(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});






app.listen(3002, () => console.log("server started on port 3002"));