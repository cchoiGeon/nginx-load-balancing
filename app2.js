const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server 2');
});

app.listen(3001, () => {
    console.log('Server 2 listening on port 3001');
});
