const express = require('express');
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Página principal');
});

app.use('/systeminfo', ()=>{});
app.use('/issuesform', () =>{});

module.exports = router;