const express = require('express');
const app = express();
app.use(express.json());

// Existing basic operations here...

// Exponentiation: a^b
app.get('/power', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send('Both a and b are required');
    res.send({ result: Math.pow(Number(a), Number(b)) });
});

// Square Root: √a
app.get('/sqrt', (req, res) => {
    const { a } = req.query;
    if (!a) return res.status(400).send('Parameter a is required');
    const result = Math.sqrt(Number(a));
    if (isNaN(result)) return res.status(400).send('Invalid input for square root');
    res.send({ result });
});

// Modulo: a % b
app.get('/modulo', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).send('Both a and b are required');
    res.send({ result: Number(a) % Number(b) });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Calculator microservice running on port ${PORT}`));
