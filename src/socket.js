import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        forceNew: true, // Fixed option name
        reconnectionAttempts: Infinity, // Fixed property name
        timeout: 10000,
        transports: ["websocket"],
    };

    return io(process.env.REACT_APP_BACKEND_URL, options);
};
