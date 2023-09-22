import express from 'express';
import http from 'http';
import { WebSocket } from 'ws';
import kleur from 'kleur';

const PORT = '8080'

const app = express();
const server = http.createServer(app);
const socket = new WebSocket.Server({ server });

socket.on('connection', (ws: any) => {
  // eslint-disable-next-line no-console
  console.log('Client connected');

  ws.on('message', (message: string) => {
    // eslint-disable-next-line no-console
    console.log(`Received: ${message}`);
    ws.send(`You sent: ${message}`);
  });

  ws.on('close', () => {
    // eslint-disable-next-line no-console
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(kleur.yellow(`Server is listening on http://localhost:${PORT}`));
});
