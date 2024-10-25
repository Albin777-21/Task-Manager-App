const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://albinsaji070:cosmicsoul21@cluster0.y7pkw.mongodb.net/'
).then(() => console.log('Connected to database')).catch(error=>console.log(`Error occurred to connect to database:${error}`))