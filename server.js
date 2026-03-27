const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell Express to serve all files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve your index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Quiz server is running!`);
    console.log(`🚀 Access it at: http://localhost:${PORT}`);
});
