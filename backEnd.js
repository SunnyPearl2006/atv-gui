const express = require('express');
const path = require('path'); // for serving HTML files
const { exec } = require('child_process');
const fs = require('fs');
const csv = require('csv-parser');
const xlsx = require('xlsx');
const app = express();
const PORT = 3000;

const FILE_PATH = path.join(__dirname, 'data.lasic');

app.use(express.static(__dirname));

function getData() {
    console.log("Fetching data...");
    const ext = path.extname(FILE_PATH).toLowerCase();
    if (ext === '.csv') {
        return ["CSV"];
    } else if (ext === '.xlsx' || ext === '.xls') {
        return ["XLSX"];
    } else {
        return ["UNSUPPORTED FILE TYPE"];
    }
}

// API endpoint for frontEnd to fetch data
app.get('/data', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.json(getData()); 
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    exec(`start http://localhost:${PORT}`);
});

