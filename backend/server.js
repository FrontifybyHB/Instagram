import app from "./src/app.js";
import connectDB from './src/db/db.js'
import config from './src/config/config.js'
import { createServer } from "http";
import { Server } from "socket.io";

const port = config.PORT;
const httpServer = createServer(app);

const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log('A user connected')

  socket.on("disconnect", () => {
    console.log('A user disconnect')
  })
});


connectDB();

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});