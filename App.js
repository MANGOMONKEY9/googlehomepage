const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express()
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.render("app")
})

//--------------------------------------------------------
app.listen(3000, () => {
    console.log("Server started on port 3000.")
}
)