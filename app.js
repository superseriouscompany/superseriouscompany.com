var express    = require('express');
var fs         = require('fs');
var mustache   = require('mustache');
var bodyParser = require('body-parser');
var app        = express();

var mongoUrl = process.env.MONGODB_URI || ''

var template      = fs.readFileSync('./public/index.html').toString();
var adminTemplate = fs.readFileSync('./public/admin.html').toString();

var days = [
  {
    day: 1,
    imageUrl: 'https://cldup.com/UZJWVxXKjK.png',
    portugueseTitle: 'Dia Um',
    englishSubtitle: 'Day One',
    santi: `<p>
        Today, the big tuna and the little tuna woke up in Portugal (I'm the big tuna).
        This here's a holy place: the only country on the planet to provide low living costs, fast internet speeds, AND epic surf.
        Here, we plan on building a business that will finally make us rich and famous – behold Super Serious Company.
        We thought it wise to start by writing down our ten-, five-, and one-year goals.
      </p>`,
    neil: `<p>
        We did long term goal setting and Santi and I are aligned in our visions of grandiose and eccentric lives, except my 10 year goal list has “Kids” and his 5 year goal list has “No Kids.”
      </p>
      <p>
        Our weekly food budget is 60 euros each. I spent 46 euros today and I ate more than half my food already and I am panicking.
      </p>
      <p>
        While I was making dinner, Santi inexplicably put his fuck playlist on the big jambox.
      </p>`,
  }
]

app.get('/', function(req, res) {
  var html = mustache.render(template, {days: days});
  res.send(html);
})

app.get('/biden', function(req, res) {
  res.send(adminTemplate);
})

app.post('/days', bodyParser.urlencoded({extended: false}), function(req, res) {
  console.log(req.body.santi, req.body.neil, 'nope');
  res.json(req.body);
})

var port = process.env.PORT || 3000;
app.listen(port, function(err) {
  if( err ) { throw err; }
  console.log(`Listening on ${port}...`);
})
