const express = require('express');
const indexRouter = require('./routes/index.router');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', indexRouter);

app.listen(port, () => {
    console.log(`System at http://localhost:${port}`);
});