const flattenArray = require('./flattenArray')
const isOddNumber = require('./isOddNumber')
const toUpperCase = require('./toUpperCase')

module.exports = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  }