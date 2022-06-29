const express = require("express");
const dotenv = require("dotenv");

require("./db/conn");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from the server")
})



app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
})