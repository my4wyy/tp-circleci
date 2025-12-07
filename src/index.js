const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => console.log("Running"));
