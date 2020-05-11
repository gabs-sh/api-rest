const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) //passar json pelo corpo da requisição
app.use(bodyParser.urlencoded({extended: false})) //passar parâmetros pela url