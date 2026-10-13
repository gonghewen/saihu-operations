const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from repo root (index.html at root)
app.use(express.static(path.join(__dirname)));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`saihu-operations static server running at http://localhost:${PORT}`);
});
