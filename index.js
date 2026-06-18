import express from "express"
import players from "./data/playerData.js";
import playerRoute from "./routes/playerRoute.js";

const port = 3000;
const app = express();

// Setup View Engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const logReq = (req, res, next) => {
  console.log("Request Received ", new Date());
  next();
};
app.use(logReq);

app.route("/home")
    .get( (req, res) => {
        res.render('home', { players })
    })
    // POST req form action
    .post( (req, res) => { 
        const { num, lastName, firstName, pos } = req.body;
        
        if (!num || !lastName || !firstName || !pos) {
            return res.status(400).send('<h1>Error</h1><p>All fields are required.</p>');
        }

        // View the data in your terminal console
        //console.log('Received Form Data:', { num, lastName, firstName, pos });
        const newPlayer = {id: num,
            firstname: firstName,
            lastname: lastName,
            position: pos,
            image: ""};

        players.push(newPlayer);
        res.redirect("/home");
    })

app.use("/player", playerRoute);

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
