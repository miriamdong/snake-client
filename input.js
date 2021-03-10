const net = require('net');
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
} = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!');
      process.exit();
    } else if (key === MOVE_UP_KEY) {
      conn.write("Move: up");
    } else if (key === MOVE_LEFT_KEY) {
      conn.write("Move: left");
    } else if (key === MOVE_DOWN_KEY) {
      conn.write("Move: down");
    } else if (key === MOVE_RIGHT_KEY) {
      conn.write("Move: right");
    } else {
      conn.write("Say: ALOHA!");
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
};