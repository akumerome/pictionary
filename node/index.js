import express from 'express';
import { createServer } from "http";
import { Server } from 'socket.io';
import cors from "cors";
import { generate } from "random-words";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust this to your specific origin if necessary
    methods: ["GET", "POST"],
  },
});

let room = {
  players: [],
  round: 0,
}

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('canvas-painted', (data) => {
    io.emit('canvas-painted', data);
  });

  socket.on('canvas-erased', () => {
    io.emit('canvas-erased', true);
  });

  socket.on('answer-submited', (data) => {
    io.emit('answer-submited', data);
  });

  socket.on('get-words-options', () => {
    const words = genereate_random_words();
    io.emit('get-words-options', words);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

function genereate_random_words() {
  return generate({ minLength: 4, exactly: 4 });
}

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});