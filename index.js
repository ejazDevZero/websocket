const WebSocket = require("ws");
const server = require("http").createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  console.log("Client connected");
  socket.send("Welcome to WebSocket server!");

  socket.on("message", msg => {
    console.log("Received:", msg);
    socket.send("You said: " + msg);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("WebSocket server running...");
});
