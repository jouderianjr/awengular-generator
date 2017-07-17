#!/usr/bin/env node
'use strict'

const cli             = require('yargs')
const fileCreator     = require('./file-creator')
const fileGenerator   = require('./file-generator')
const moduleGenerator = require('./module-generator')
const chalk           = require('chalk')
const figlet          = require('figlet')

const validCommands = ['controller', 'service', 'module']

const argv = cli
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


if (argv._.length === 0) { welcomeMessage() }

if( argv._.length > 0 && isNotValidCommand(argv._[0])) { showInvalidCommandMessage() }

function isNotValidCommand(command) {
    return !validCommands.some( valid => command === valid)
}

function welcomeMessage() {
    console.log(chalk.yellow(figlet.textSync('Awengen')))
    console.log(chalk.blue('Type awengen --help to see all options'))
}


function showInvalidCommandMessage() {
    console.log(chalk.yellow(figlet.textSync('Awengen')))
    console.log(chalk.red('Invalid command'))
    console.log(chalk.blue('Type awengen --help to see all options'))
}
