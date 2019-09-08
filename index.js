const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ lol: "fku" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
