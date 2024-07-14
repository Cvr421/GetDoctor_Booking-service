const express = require("express");
const cors = require("cors");


require("dotenv").config();
require("./database/connection").default;
// const userRouter = require("./routes/userRoutes");
// const doctorRouter = require("./routes/doctorRoutes");
// const appointRouter = require("./routes/appointRoutes");
const { path } = require("path");

// const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "./client/build/index.html"));
});
  
app.listen(port, () => {

    console.log("server is started ")
}

);