const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({response: "index route"}));

/*  Every team member has to add a route to this file, like the one above
    For example: 
    Student A writes the route for GET /playlist
    and student B writes the route for PUT /language */

app.get('/playlists', (req, res) => res.json({response: "get all playlists"})); // linoy

app.get('/playlists/:id', (req, res) => res.json({response: "get specific playlist"})); // yahli

app.delete('/playlists/:id', (req, res) => res.json({response: "delete specific playlist"})); // David

app.post('/playlists', (req, res) => res.json({response: "post playlist"})); // Dekel

app.listen(port, () => console.log(`Listening on port ${port}`));
