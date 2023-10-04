import express from 'express';
import http from 'http';
import { WebSocket } from 'ws';
import kleur from 'kleur';

const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);
const socket = new WebSocket.Server({ server });

socket.on('connection', (ws) => {
  // eslint-disable-next-line no-console
  console.log(kleur.bgMagenta('Client connected'));

  ws.send('Hello from server, it is a lovely day to talk through a websocket.');

  ws.emit('codeExecuted', 'the purpose of life is 42')

  ws.on('message', (message: string) => {
    // eslint-disable-next-line no-console
    console.log(`Received: ${message}`);
  });

  ws.on('close', () => {
    // eslint-disable-next-line no-console
    console.log(kleur.bgMagenta('Client disconnected'));
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(kleur.blue(`Server is listening on http://localhost:${PORT}`));
});
