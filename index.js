var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('A user is connecting.');

   socket.on('disconnect', function(){
    console.log('A user has disconnected.');
  });

	socket.on('name input', function(msg){
		if (msg != ''){
   	 console.log(msg + " has signed in.");
   	}

  });

});
