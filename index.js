const express = require("express");
const app = express();

require("express-ws")(app);

app.ws("/ws", function (ws, req) {
  ws.on("message", function (msg) {
    console.log(msg);
    ws.send("hello world!");
  });
  console.log("socket", req.testing);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Ready on port: " + port + " !");
});
