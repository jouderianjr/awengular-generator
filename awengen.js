#!/usr/bin/env node
'use strict'

const cli         = require('commander')
const fileCreator = require('./file-creator')

cli
    .version('0.0.1')
    .command('controller [name] [moduleName]', 'Generate an angular controller')
    .command('module [name] [moduleName]', 'Generate an angular controller')
    .parse(process.argv)

module.exports = cli