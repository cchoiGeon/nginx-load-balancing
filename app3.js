const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from server 3');
});

app.listen(3002, () => {
    console.log('Server 2 listening on port 3002');
});
