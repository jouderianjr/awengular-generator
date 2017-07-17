'use strict'

const fs          = require('fs')
const utils       = require('./utils')
const handlebars  = require('handlebars')
const fileCreator = require('./file-creator')
const chalk       = require('chalk')

function generate(data, type){

    const templateSrc  = `${__dirname}/templates/${type}.tpl.js`
    let templateArgs = utils.setupArgsForTemplateFile(data.name, data.moduleName, type)

    if ( data.folder ) { templateArgs.folder = data.folder }

    fileCreator
        .createFileFromTemplate(templateSrc, templateArgs)
        .then(createFileSuccess.bind(this, type),createFileError)

}

function createFileSuccess(type, data) {
    console.log(chalk.blue(`${type} Has been successful created`))
}

function createFileError() {
    console.log(chalk.magenta(`${type} couldn't be created :(`))
}

exports.generate = generate
