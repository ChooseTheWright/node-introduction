var express = require('express');
var bodyParser = require('body-parser');
var bc = require('./controllers/books_controllers.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));

var baseUrl = '/api/books';

app.post(baseUrl, bc.create);
app.get(baseUrl, bc.read);
app.put(`${baseUrl}/:id`, bc.update);
app.delete(`${baseUrl}/:id`, bc.delete);

app.listen(3000, () => {
  console.log('I am listening');
})
