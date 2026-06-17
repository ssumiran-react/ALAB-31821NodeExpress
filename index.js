import express from "express"
import players from "./data/playerData.js";

const port = 3000;
const app = express();

// Setup View Engine
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home', { players })
})



// create a route
app.get("/", (req, res) => {
    res.redirect("/home");
})

// Start server
app.listen(port, () => {
    console.log("Server runs on port: " + port);
})

//Error handling middleware
app.use((err, req, res, next) => {
    res.status(404).send("Error: "+err);
})