import { io } from 'socket.io-client';

let socket = null;

export const connectSocket = (userId) => {
  if (socket) return socket;

  socket = io('https://backend-srsv.onrender.com', { withCredentials: true });
  socket.emit('register', userId);
  return socket;
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
  socket = null;
};