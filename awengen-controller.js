#!/usr/bin/env node
'use strict'

const program    = require('./awengen')
const handlebars = require('handlebars')
const fs         = require('fs')
const chalk      = require('chalk')
const utils      = require('./utils')
const controllerGenerator = require('./generators/controller')

let name          = program.args[0]
let moduleName    = program.args[1]
let templateArgs  = setupArgsForTemplate(name, moduleName)
let filename      = utils.getFileName(name)

initialize();

function initialize(){
    controllerGenerator
        .generate(name, moduleName)
        .then(() => console.log('deu certo!'))

    // fs.readFile(templateSrc, (err, data)=>{
    //     if(err){
    //         console.log(`${chalk.cyan('Sorry, we couldn\'t find the template file')}`)
    //         return
    //     }

    //     let compiled = handlebars.compile(data.toString())(templateArgs)

    //     fs.writeFile(utils.getFullPathFile(filename), compiled, (err, data) => {
    //         if(err){
    //             console.log(`${chalk.bgRed('ERROR:')} ${chalk.red('We are not able to save the file')}`)
    //         }else{
    //             console.log(`${chalk.magenta(templateArgs.name)} ${chalk.cyan('was successful created')} ${chalk.red('S2')}`)
    //         }
    //     })
    // })
}

function setupArgsForTemplate(name, moduleName){
    let functionName   = name.replace(name.charAt(0), name.charAt(0).toLowerCase()) + 'Controller'
    let controllerName = name.replace(name.charAt(0), name.charAt(0).toUpperCase()) + 'Controller'
    return {functionName : functionName, name : controllerName, moduleName : moduleName}
}