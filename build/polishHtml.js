/* eslint-disable */
const fs = require('fs')
const path = require('path')

module.exports = function () {
  function _inlineReplace(match, file) {
    let name = file.split('.')[0]
    let target = ''
    if (/\.js/.test(file)) {
      target = jsFiles.find(item => item.split('.')[0] === name)
      if (!target) return ''
      return fs.readFileSync(path.resolve(__dirname, `../dist/static/js/${target}`), 'utf-8')
    } else {
      target = cssFiles.find(item => item.split('.')[0] === name)
      if (!target) return ''
      return fs.readFileSync(path.resolve(__dirname, `../dist/static/css/${target}`), 'utf-8')
    }
  }

  function _lsReplace(match, file) {
    let name = file.split('.')[0]
    let target = ''
    if (/\.js/.test(file)) {
      target = jsFiles.find(item => item.split('.')[0] === name)
      if (!target) return ''
      return `LS.load('${file}', '/static/js/${target}');`
    } else {
      target = cssFiles.find(item => item.split('.')[0] === name)
      if (!target) return ''
      return `LS.load('${file}', '/static/css/${target}');`
    }
  }

  var jsFiles = fs.readdirSync(path.resolve(__dirname, '../dist/static/js')).filter(item => /\.js$/.test(item))
  var cssFiles = fs.readdirSync(path.resolve(__dirname, '../dist/static/css')).filter(item => /\.css$/.test(item))
  var html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
  var result = html.replace(/<!--\s*\$\(([\w.]*)\)\s*-->/g, _lsReplace)
    .replace(/<!--\s*@\(([\w.]*)\)\s*-->/g, _inlineReplace)
  fs.writeFile(path.resolve(__dirname, '../dist/index.html'), result, () => {
    console.log('Polish Html Finished! <LocalStorage Mode: ON>')
  })
}
