const express = require("express");
const cors = require("cors");
const { router } = require("./router");

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/tasks", router)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
