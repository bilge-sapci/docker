const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! My name is [Your Name]');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
