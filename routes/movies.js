const express = require('express');
const router = express.Router();
const mockData = require('../mockDatan');

//array för att lagra filmer
let movies = mockData;
let nextId = movies.length + 1;//inleder id med 1

//Get /movies: hämta en lista med alla Bondfilmer
router.get('/', (req, res) => {
    res.json(movies);
});

// Get /movies:id: hämta en specifik bondfilm baserat på dess ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return res.status(404).json({ error: 'Movie not found'});
    }

    res.json(movie);
});

// Post /movies: Lägg till en ny Bondfilm
router.post('/', (req, res) => {
    const movie = req.body;
    movie.id = nextId++;
    movies.push(movie);
    res.status(201).json(movie);
});

// PUT /movies/:id Uppdatera en befintlig bondfilm baserat på dess ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return res.status(404).json([{ error: 'Movie not found'}]);
    }

    Object.assign(movie, req.body);
    res.json(movie);

    });


// Delete /movies/:id: Ta bort en bondfilm baserat på dess ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = movies.findIndex(movie => movie.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    movies.splice(index, 1);
    res.status(204).end();
});


module.exports = router;