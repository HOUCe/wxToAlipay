var parseJSON = require('../lib/json/index')
var wxmlToAxml = require('../lib/wxml/index')
var assert = require('assert')
const path = require('path');
const fs = require('file-system')

function readFileSync(filepath) {
  return fs.readFileSync(path.join(__dirname, filepath), { encoding: 'utf8' });
}

function writeFileSync(filepath, content) {
  return fs.writeFileSync(path.join(__dirname, filepath), content, { encoding: 'utf8' });
}

describe('资源路径替换', function() {
  it('lechebang', () => {
    let result = readFileSync('json/app.json')

    writeFileSync('json/app.alipay.json', parseJSON(result, true))
  })

  it('page', () => {
    let result = readFileSync('json/page.json')

    writeFileSync('json/page.alipay.json', parseJSON(result, true))
  })
})