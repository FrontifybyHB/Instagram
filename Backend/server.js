import app from "./src/app.js"
import connectDB from "./src/db/db.js"
import { createServer } from "http";
import setupSocket from "./src/sockets/socket.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));



const httpServer = createServer(app);


setupSocket(httpServer);
connectDB()

app.get("*name", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})