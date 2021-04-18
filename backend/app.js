global.mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const crypto = require('crypto');
const session = require('express-session');
const connectMongo = require('connect-mongo')(session);

app.use(express.json());

app.use(express.static(path.join(__dirname, './www')));

const atlasURL = 'mongodb+srv://dbUser:dbUser123459@phcluster.7zsbu.mongodb.net/projektDB?retryWrites=true&w=majority';

global.mongoose.connect(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const models = require('./models.js');
const { users } = require("./models.js");
const secret = 'S0m3#p30p13_l1k35-c1l4n7r0,_50m3.d0N7';

app.use(session({
  secret: 'S0m3#p30p13_l1k35-c1l4n7r0,_50m3.d0N7', // choose your own...
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new connectMongo({mongooseConnection: mongoose.connection})
}));

// get for models
app.get("/rest/:model", async (req, res) => {
  let model = models[req.params.model]
  let doc = await model.find()
  res.json(doc)
})

//get specific model by id
app.get("/rest/:model/:id", async (req, res) => {
  let model = models[req.params.model]
  let doc = await model.findById(req.params.id).populate(['userId']).exec();
  res.json(doc);
})

// add a model
app.post("/rest/:model", async (req, res) => {
  let model = models[req.params.model]
  let doc = new model(req.body);
  await doc.save();
  res.json(doc);
})

// Add a user
app.post('/api/users', async (req, res) => {
  let model = models['users'];

  let valCheck = await model.findOne({ email: req.body.email });
  if (valCheck) {
    res.json({ success: false });
    return;
  }

  // Encrypt password
  const hash = crypto.createHmac('sha256', secret)
    .update(req.body.password).digest('hex');
  // Create new user
  let user = new model({...req.body, password: hash});
  // NOTE: This system is unsafe since you can 
  // choose your own role on registration!
  await user.save();
  res.json({success: true});
});


// login
app.post('/api/login', async (req, res) => {
    // note: req.session is unique per user/browser
  if(req.session.user){
    res.json({error: 'Someone is already logged in'});
    return;
  }
   // Encrypt password
  const hash = crypto.createHmac('sha256', secret)
    .update(req.body.password).digest('hex');
  // Search for user
  let model = models['users'];
  let user = await model.findOne({ email: req.body.email, password: hash });
  if (user && user.banTime) {
    res.json('banned');
  }
  else if(user){
    // succesful login, save the user to the session object

    req.session.user = user;
    res.json({ success: 'Logged in' });
  }
  else {
    res.json('');
  }
});
//logout
app.delete('/api/login', (req, res) => {
  if(req.session.user){
    delete req.session.user;
    res.json({success: 'Logged out'});
  }
  else {
    res.json({error: 'Was not logged in'});
  }
});
//get the user who is online
app.get('/api/login', (req, res) => {
  if(req.session.user){
    let user = {...req.session.user};
    delete user.password; // remove password in answer
    res.json(user);
  }
  else {
    res.json('');
  }
});


// Update users page views.
app.put('/rest/users/:id', async (req, res) => {
  let model = models['users']
  let user = await model.findById(req.params.id)
  if (req.body.profileViews) {
    if (user.profileViews === null) {
      user.profileViews = req.body.profileViews;
    } else {
      user.profileViews = user.profileViews + 1;
    }
    delete req.body.profileViews;
  }

  if (req.body.lastTimeOnline) {
  user.lastTimeOnline = req.body.lastTimeOnline; 
  delete req.body.lastTimeOnline;
  }

  if (req.body.roles) {
    user.roles = req.body.roles;
    delete req.body.roles;
  }

  Object.assign(user, req.body)
  await user.save()
  res.json(user)
});


// _________________ POSTS _________________




app.listen(3002, () => console.log("server started on port 3002"));