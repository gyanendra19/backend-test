const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.send('This is my home')
})
app.listen(3232, () => {
    console.log('connect')
})