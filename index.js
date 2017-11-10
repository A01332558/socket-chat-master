var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){
	console.log('Un nuevo cliente');
	client.emit('io', 'Hola bebe!');
	client.on('chat-message', function(msg){
		console.log('message', msg);

		io.client.emit('chat-message', msg); // vamos a enviar a todos
	});
});

server.listen(3000);
