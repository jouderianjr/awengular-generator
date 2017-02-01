#!/usr/bin/env node
'use strict'

const program     = require('./awengen')
const handlebars  = require('handlebars')
const fs          = require('fs')
const chalk       = require('chalk');
const fileCreator = require('./file-creator')
const utils       = require('./utils')

const templateSrc = `${__dirname}/templates/controller.tpl.js`
let name          = program.args[0]
let moduleName    = program.args[1]
let templateArgs  = setupArgsForTemplate(name, moduleName)
let filename      = utils.getFileName(name)

initialize();

function initialize(){
    fileCreator.createFolder('vigi_doido')
        .then(folderCreated, folderCreationError)
}

function folderCreated(){
    createFiles()
}

function folderCreationError(err){
    if(err.code === 'EEXIST'){
        createFiles()
    }
}

function createFiles() {
    console.log('create this bitch!')
}

function setupArgsForTemplate(name, moduleName){
    let functionName   = name.replace(name.charAt(0), name.charAt(0).toLowerCase()) + 'Controller'
    let controllerName = name.replace(name.charAt(0), name.charAt(0).toUpperCase()) + 'Controller'
    return {functionName : functionName, name : controllerName, moduleName : moduleName}
}