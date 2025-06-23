const express = require('express');
const app = express();
const PORT = 1000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from Backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});