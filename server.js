const express = require('express');

const app = express();

app.use(express.static('./dist/auth'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/auth/'}),
);

app.listen(process.env.PORT || 8080);