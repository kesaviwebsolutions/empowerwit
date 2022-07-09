const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routers/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


require("./db/conn");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello from the server")
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.use('/user', userRoutes)

// app.use(notFound)
// app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
})