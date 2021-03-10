const net = require('net');

const connect = require('./client');
/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        console.log('Thanks for using me, ciao!');
        process.exit();
      }
    });
    return stdin;
  };
};