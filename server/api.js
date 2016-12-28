/* eslint-disable */

var router = require('express').Router()
var request = require('request')
var jar = request.jar()
var prefix = 'http://mock.host.com'

router.get('/api1', function (req, res) {

})

router.post('/api2', function (req, res) {

})

function _parseQuery (obj) {
  var arr = []
  for(let a in obj) {
    arr.push(a + '=' + obj[a])
  }
  return '?' + arr.join('&')
}

module.exports = router
