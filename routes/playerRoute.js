import express from 'express'
import players from '../data/playerData.js';

const router = express.Router();

export let eachPlayer = {};

router
    .route("/:id")
    .get((req, res) => {
        
        if (req.params) {
            eachPlayer = players.find((p) => p.id == req.params.id);
            console.log("in player",eachPlayer.image);
            res.render('viewPlayer', { eachPlayer });
        } else {
            res.render('viewPlayer', { eachPlayer });
        }

    })






export default router