import EventEmmitter from 'node:events';

const emitter = new EventEmmitter();

// Add an event handler
emitter.on('hello', (message) => {
  console.log(`Event Handled :- ${message}`);
});

// Emit the event after a 3 second delay
setTimeout(() => {
  emitter.emit('hello', 'This is a message from the event');
}, 3000);
