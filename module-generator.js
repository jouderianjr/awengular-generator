'use strict'

const fs            = require('fs')
const fileGenerator = require('./file-generator')
const utils         = require('./utils')
const chalk         = require('chalk')

function generate(args) {
    let name       = args.name
    let moduleName = args.moduleName

    console.log(chalk.magenta('Not implemented yet'))
}

exports.generate = generate
