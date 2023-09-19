const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })); // Use app.use em vez de app.user

app.post('/usuario', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>parabéns</h1>')
})

app.post('/usuario/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>welcome</h1>')
})

app.listen(3003)
