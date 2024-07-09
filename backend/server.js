const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes")

const app = express();

dotenv.config();
connectDB();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running")
})


app.use("/api/user", userRoutes);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`.yellow.bold);
})



























// app.get("/api/chats", (req, res) => {
//   res.send(chats)
// })

// app.get("/api/chats/:id", (req, res) => {
//   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat)
// })
