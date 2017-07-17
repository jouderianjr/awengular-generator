'use strict'

const utils      = require('./utils')
const fs         = require('fs')
const handlebars = require('handlebars')
const chalk      = require('chalk')
const mkdirp     = require('mkdirp')

function createFileFromTemplate(templateSrc, templateArgs, type){
    return new Promise((resolve, reject) => {
        fs.readFile(templateSrc, (err, data)=>{
            let compiled = handlebars.compile(data.toString())(templateArgs)


            if(err){
                reject(err)
                return
            }

            if (templateArgs.folder ) { createFolder(templateArgs.folder) }

            fs.writeFile(utils.getFullPathFile(templateArgs.filename, templateArgs.folder), compiled, (err, data) => {
                if(err){
                    reject(err)
                    return
                }

                resolve()
            })
        })
    })
}

function createFolder(folder) {
    mkdirp.sync(`${process.cwd()}/${folder}`)
}

module.exports = {
    createFolder           : createFolder,
    createFileFromTemplate : createFileFromTemplate
}
