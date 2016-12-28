/* eslint-disable */
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static(path.resolve(__dirname, '../dist/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())
app.use('/api', require('./api'))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})
var server = app.listen(3000, function () {})
