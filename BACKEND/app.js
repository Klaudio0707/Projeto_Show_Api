//conexão com o banco de dados e a aplicação

const express = require("express");
const  cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json());

// DB CONNECTION

const conn = require("./db/conn")
conn();
// routes

const routes = require("./routes/route");
app.use("/api", routes);
app.listen(3000, function() {
console.log("Servidor Online");

});