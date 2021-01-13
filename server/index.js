const express = require('express');
const app = express();

app.use(express.json())

// ENDPOINTS
const showCtrl = require('./showCtrl');
app.get('/api/shows', showCtrl.getShows)
app.post('/api/shows', showCtrl.addShow)
app.put('/api/show/:id', showCtrl.updateShow)


app.listen(5556, () => console.log('bingpot on port 5556'))