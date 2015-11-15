var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static("public"));

io.on("connection", function(socket){
  // do stuff with the connected socket here
});

http.listen(process.env.PORT || 3000);
