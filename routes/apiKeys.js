const express = require('express');
const router = express.Router();

let validApiKeys = ["5", "6", "7"];

function generateApiKey() {
  const key = Date.now().toString();
  validApiKeys.push(key);
  return key;
}

// Middleware för att kontrollera giltig API-nyckel
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ error: "API key is missing" });
  }

  if (!validApiKeys.includes(apiKey)) {
    return res
      .status(403)
      .json({ error: "Invalid API key" });
  }

  next();
};

// Skapa en ny API-nyckel
router.post("/", (req, res) => {
  const newApiKey = generateApiKey();
  res
    .status(201)
    .json({ message: "API key created successfully. Your new API key is: " + newApiKey });
});

// Ta bort en API-nyckel
router.delete("/:apiKey", (req, res) => {
  const apiKeyToDelete = req.params.apiKey;

  if (!validApiKeys.includes(apiKeyToDelete)) {
    return res
      .status(404)
      .json({ error: "API key not found" });
  }

  validApiKeys = validApiKeys.filter((key) => key !== apiKeyToDelete);
  res
    .status(200)
    .json({ message: "API key deleted successfully" });
});

// Lista alla giltiga API-nycklar
router.get("/", (req, res) => {
  res.json(validApiKeys);
});

module.exports = { router, authenticateApiKey };
