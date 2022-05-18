const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(cors())
app.use(morgan('combined'))
// app.use(express.urlencoded());
// app.use(express.json())
app.use(bodyParser.json())

require('./routes')(app)
// app.use(app.router)
// {force: true}
sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server has started on port: ${config.port}`)
        })