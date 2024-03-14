// index.js

// Express

const express = require('express');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');
var access_token = '';

app.get('/', function (req, res) {
  res.render('pages/index', { client_id: clientID });
});

const port = process.env.PORT || 2400;
app.listen(port, () => console.log('App listening on port ' + port));

const clientID = '';
const clientSecret = '';

app.get('/github/callback', (req, res) => {
  const requestToken = req.query.code;

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    access_token = response.data.access_token;
    res.redirect('/success');
  });
});

app.get('/success', (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.github.com/user',
    headers: {
      Authorization: 'token ' + access_token,
    },
  }).then((response) => {
    console.log(response.data);
    res.render('pages/success', { userData: response.data });
  });
});
