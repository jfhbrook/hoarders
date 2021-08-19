var hoarders = require('.');

var app = hoarders.express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

app.listen(3000, function () {
  console.log('listening on 3000!');
});


