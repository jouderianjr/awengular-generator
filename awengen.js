#!/usr/bin/env node
'use strict'

const cli             = require('yargs')
const fileCreator     = require('./file-creator')
const fileGenerator   = require('./file-generator')
const moduleGenerator = require('./module-generator')

cli
    .command(
        'controller <name> <moduleName> [folder]',
        'Generate an angular controller',
        {},
        (data) => fileGenerator.generate(data, 'Controller')
    )
    .command(
        'service <name> <moduleName> [folder]',
        'Generate an angular service',
        {},
        (data) => fileGenerator.generate(data, 'Service')
    )
    .command(
        'module <name> <moduleName>',
        'Generate an angular module',
        {},
        moduleGenerator.generate
    )
    .help()
    .argv
