'use strict'

const utils      = require('./utils')
const fs         = require('fs')
const handlebars = require('handlebars')
const chalk      = require('chalk')

function createFileFromTemplate(templateSrc, templateArgs, type){
    return new Promise((resolve, reject) => {
        fs.readFile(templateSrc, (err, data)=>{
            let compiled = handlebars.compile(data.toString())(templateArgs)

            if(err){
                reject(err)
                return
            }

            fs.writeFile(utils.getFullPathFile(templateArgs.filename), compiled, (err, data) => {
                if(err){
                    reject(err)
                }

                resolve()
            })
        })
    })
}

function createFolder(folderName){
    return new Promise((resolve, reject) => {
        let fullPath = utils.getFullPathFile(folderName)
        fs.mkdirSync(fullPath)
        fs.existsSync(fullPath) ? resolve() : reject()
    })
}

module.exports = {
    createFolder           : createFolder,
    createFileFromTemplate : createFileFromTemplate
}