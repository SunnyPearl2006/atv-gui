const express = require('express');
const path = require('path'); // for serving HTML files
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

// Serve static files (frontend) from the current folder
app.use(express.static(__dirname));

        // example function to read CSV / Excel and convert to strings
function getData() {
    console.log("Fetching data...");
    return ["FINALLY","LOLOL","The ultimate test","kololijsefuifeui"]; // placeholder
}

// API endpoint for frontEnd to fetch data
app.get('/data', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.json(getData());  // send as JSON
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    exec(`start http://localhost:${PORT}`);
});

