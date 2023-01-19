require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.locals.data = {}
    next()
});

app.use(express.static(__dirname + '/public'));

app.use('/api/blogs', require('./controllers/blogRootController'))

app.listen(PORT, () => {
    console.log('i am listening on port 3008')
});

