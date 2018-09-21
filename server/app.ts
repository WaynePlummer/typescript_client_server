import express = require('express');
import bodyParser = require('body-parser');
import http = require('http');
import path = require('path');

import * as appSub from "./appSub";

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static((path.join(__dirname, 'public'))));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post('/api/data', (request, response) => {
  console.log("server\\app");
  const postBody = request.body;
  response.send(appSub.getResponse(postBody));
  response.end();
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
