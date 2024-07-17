import { io } from "socket.io-client";
import { useAppStore } from '../stores/app';

let url = "http://localhost:8080"; // deployment environment

export const socket = io(url);

socket.on("connect", () => {
  console.log("Connected to the server");

  const store = useAppStore();

  socket.on("canvas-painted", (data) => {
    console.log("canvas painted socket data received:", data);
    store.setBrushStroke(data);
  });

  socket.on("canvas-erased", (data) => {
    console.log("canvas erased socket data received:", data);
    store.setEraseCanvas(data);
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err);
});