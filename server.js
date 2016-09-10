var express    = require('express');
var fs         = require('fs');
var mustache   = require('mustache');
var bodyParser = require('body-parser');
var client     = require('mongodb').MongoClient;
var app        = express();

var template      = fs.readFileSync('./public/index.html').toString();
var adminTemplate = fs.readFileSync('./public/admin.html').toString();

var mongoUrl = process.env.MONGODB_URI || 'mongodb://heroku_n41dvcxp:tps295d6qk3aogkbqmrttluccn@ds029106.mlab.com:29106/heroku_n41dvcxp';
var port     = process.env.PORT || 3000;

client.connect(mongoUrl, function(err, db) {
  if( err ) { throw err; }

  var collection = db.collection('days');

  collection.find({}).toArray(function(err, days) {
    if( err ) { throw err; }

    app.get('/', function(req, res) {
      var html = mustache.render(template, {days: days});
      res.send(html);
    })

    app.get('/biden', function(req, res) {
      res.send(adminTemplate);
    })

    app.post('/days', bodyParser.urlencoded({extended: false}), function(req, res, next) {
      collection.insert(req.body, function(err, ok) {
        if( err ) { return next(err); }

        res.json(req.body);
      })
    })

    app.get('/days', function(req, res, next) {
      res.json({days: days});
    })

    app.use(express.static('dist'));
    app.use(express.static('public'));

    app.use(function errorHandler(err, req, res, next) {
      console.error('Internal Server Error', err, err.stack);
      res.status(500).json({error: 'An unexpected error occured.'})
    })

    process.on('uncaughtException', function(err) {
      console.error('Failed to catch exception', err, err.stack);
      process.exit(0);
    });

    app.listen(port, function(err) {
      if( err ) { throw err; }
      console.log(`Listening on ${port}...`);
    })
  })
})
