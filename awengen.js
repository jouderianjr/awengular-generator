#!/usr/bin/env node
'use strict'

const cli             = require('commander')
const fileCreator     = require('./file-creator')
const fileGenerator   = require('./file-generator')
const moduleGenerator = require('./moduleGenerator')

cli
    .version('0.0.1')

    .command('controller <name> <moduleName>', 'Generate an angular controller')
    .on('controller', (data) => {fileGenerator.generate(data, 'Controller')})

    .command('service <name> <moduleName>', 'Generate an angular service')
    .on('service', (data) => {fileGenerator.generate(data, 'Service')})

    .command('module [name] <moduleName>', 'Generate an angular module')
    .on('module', moduleGenerator.generate(data))
    .parse(process.argv)

module.exports = cli