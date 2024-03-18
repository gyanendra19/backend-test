const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.get('/home', (req, res) => {
    res.send('This is my home')
})

app.use('/api/v1/user', userRoutes)
app.listen(3232, () => {
    console.log('connect')
})