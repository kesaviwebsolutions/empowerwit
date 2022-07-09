const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Profile", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb conenction is setup");
}).catch((e) => {
    console.log("there is no mongodb conenction");
})

