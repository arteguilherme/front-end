const express = require('express');
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = process.env.PORT || 8080

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(expressLayouts)
app.use(bodyParser.urlencoded())

app.use(express.static(__dirname + '/public'))

// index page 
app.get('/', function (req, res) {
  let products = []
  for (let id = 0; id < 10; id++) {
    let name = faker.commerce.productName()
    products.push({
      "id": id,
      "name": name,
    })
  }
  res.render('pages/home', { "products": products });
});

// register page 
app.get('/register', function (req, res) {
  res.render('pages/register');
});

app.listen(port, () => {
  console.log(`http://localhost:${port} is the magic port`);
});