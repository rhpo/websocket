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

app.listen(8080, () => {
  console.log("Ready!");
});
