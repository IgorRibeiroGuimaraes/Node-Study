const getFlagsValue = require('./flag')

console.log(`Oi ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}`)