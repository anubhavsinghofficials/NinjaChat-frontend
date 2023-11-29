import { create } from 'zustand';
import socketIOClient, { Socket } from 'socket.io-client';

type TSoketStore = { chatSocket: Socket };

export const socketStore = create<TSoketStore>()((_set, _get) => ({
  chatSocket: socketIOClient(import.meta.env.VITE_SERVER_SOCKET_URL),
}));
