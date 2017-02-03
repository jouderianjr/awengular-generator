'use strict'

const fs          = require('fs')
const utils       = require('./utils')
const handlebars  = require('handlebars')
const fileCreator = require('./file-creator')

function generate(data, type){
    let templateSrc = `${__dirname}/templates/${type}.tpl.js`
    let name = data[0]
    let moduleName = data[1]

    return new Promise((resolve, reject) => {
        let templateArgs = utils.setupArgsForTemplateFile(name, moduleName, type)

        fileCreator
            .createFileFromTemplate(templateSrc, templateArgs)
            .then((data) => resolve(data), (err) => reject(err))
    })

}

exports.generate = generate