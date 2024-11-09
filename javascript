const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

let transactionHistory = [];

// Endpoint to handle bill payments
app.post('/pay-bill', (req, res) => {
    const { type, amount, userId, urgent } = req.body;
    const transaction = { type, amount, userId, urgent, date: new Date() };
    transactionHistory.push(transaction);
    res.status(200).send('Payment processed successfully.');
});

// Endpoint to get transaction history
app.get('/transactions', (req, res) => {
    res.status(200).json(transactionHistory);
});

// Endpoint to undo last payment
app.post('/undo-payment', (req, res) => {
    if (transactionHistory.length === 0) {
        return res.status(400).send('No transactions to undo.');
    }

    const lastTransaction = transactionHistory.pop();
    res.status(200).send(Transaction for ${lastTransaction.type} undone.);
});

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
