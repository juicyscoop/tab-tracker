console.log('app started ')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.password} your user was registered`
    })
}
)

// app.get('/register', (req, res) => {
//     res.render('Register.vue');
// }
// )

app.listen(process.env.PORT || 8081);


