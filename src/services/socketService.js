
import { io } from "socket.io-client";

const socket = io("https://ridhi-backend-socket.onrender.com", {
  transports: ["websocket"],
  autoConnect: true
});

export default socket;
