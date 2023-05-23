const express = require('express');
const app = express();

// Tolka inkommande json-data
app.use(express.json());

// Importera movies router
const moviesRouter = require('./routes/movies');
const { router: apiKeysRouter, authenticateApiKey } = require('./routes/apiKeys');

// Använd authenticateApiKey-middlewaren för att säkra dina andra API-rutter
app.use(authenticateApiKey);

// Använd API-nyckel-routern för att hantera API-nycklar
app.use('/api-keys', apiKeysRouter);

// Använd movies router för alla förfrågningar som börjar med /movies
app.use('/movies', moviesRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
