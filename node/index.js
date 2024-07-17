import express from 'express';
import { createServer } from "http";
import { Server } from 'socket.io';
import cors from "cors";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust this to your specific origin if necessary
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('canvas-painted', (data) => {
    io.emit('canvas-painted', data);
  });

  socket.on('canvas-erased', () => {
    io.emit('canvas-erased', true);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});