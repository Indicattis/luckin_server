// index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 9001

app.get('/', (req, res) =>{
    return res.json(`LUCKIN_SERVER is on port:${port}`);
});

app.listen(port, () => {
    console.log("Server is running on port "+ port)
})

module.exports = app;3