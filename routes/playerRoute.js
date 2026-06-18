import express from 'express'
import players from '../data/playerData.js';

const router = express.Router();
// Serve static files from the "public" directory
import path from 'path';
import fs from 'fs';

//express.static('public');//path.join(__dirname, 'public'));
export let eachPlayer = {};

router
    .route("/:id")
    .get((req, res) => {

        if (req.params) {
            eachPlayer = players.find((p) => p.id == req.params.id);
            //console.log("in player",eachPlayer.image);
            res.render('viewPlayer', { eachPlayer });
        } else {
            res.render('viewPlayer', { eachPlayer });
        }

    })
    /*
    .get('/download', (req, res) => {
        try {
            // Path to the file you want to send
            const fileName = 'example.pdf'; // Change to your file name
            const filePath = path.join(__dirname, 'files', fileName);

            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.error(`File not found: ${filePath}`);
                    return res.status(404).send('File not found.');
                }

                // Send file for download
                res.download(filePath, fileName, (err) => {
                    if (err) {
                        console.error('Error downloading file:', err);
                        if (!res.headersSent) {
                            res.status(500).send('Error downloading file.');
                        }
                    } else {
                        console.log(`File sent: ${fileName}`);
                    }
                });
            });
            
        } catch (error) {
            console.error('Unexpected error:', error);
            res.status(500).send('Server error.');
        }
    });
*/



export default router