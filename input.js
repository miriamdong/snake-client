const net = require('net');
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
    } else if (key === 'w') {
      console.log('up');
      conn.write("Move: up");
    } else if (key === 'a') {
      console.log('left');
      conn.write("Move: left");
    } else if (key === 's') {
      console.log('down');
      conn.write("Move: down");
    } else if (key === 'd') {
      console.log('right');
      conn.write("Move: right");
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
};