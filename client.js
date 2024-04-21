const io = require('socket.io-client');
const socket = io('http://localhost:3000'); // replace with your server address and port

// Listen for messages from server
socket.on('message', (message) => {
  console.log('Received message from server:', message);
});

// Read input from terminal and send it to server
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', (input) => {
  socket.emit('message', input);
});
