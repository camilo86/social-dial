const path = require('path');
const express = require('express');
const helmet = require('helmet');
const mongooose = require('mongoose');

mongooose.connect(process.env.DB, error => {
  if (error) {
    console.error('Failed to connect to DB');
    process.exit(1);
  }
});

const Home = require('./home');

const app = express();
app.use(helmet());
app.use(express.json());
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

// routes
app.use('/', Home.router);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Social Dial server running in port: ${listener.address().port}`);
});
