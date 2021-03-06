const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const userRoutes = require('./routes/user')
const exerciseRoutes = require('./routes/exercise')

app.listen(port, () => console.log(`Listening on port ${port}`))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', userRoutes)
app.use('/exercise', exerciseRoutes)

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
if(err) console.log(err.message);
console.log('Connected to DB')
})

app.use(function(req, res, err, next) {
    if(err) {
        console.log('err',err.message)
    }
})