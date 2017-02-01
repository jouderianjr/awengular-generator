'use strict'

const utils = require('./utils')
const fs    = require('fs')

function createFileFromTemplate(templateSrc, templateArgs){
    fs.readFile(templateSrc, (err, data)=>{
        if(err){
            console.log(`${chalk.cyan('Sorry, we couldn\'t find the template file')}`)
            return
        }

        let compiled = handlebars.compile(data.toString())(templateArgs)

        fs.writeFile(utils.getFullPathFile(filename), compiled, (err, data) => {
            if(err){
                console.log(`${chalk.bgRed('ERROR:')} ${chalk.red('We are not able to save the file')}`)
            }else{
                console.log(`${chalk.magenta(templateArgs.name)} ${chalk.cyan('was successful created')} ${chalk.red('S2')}`)
            }
        })
    })
}

function createFolder(folderName){
    console.log('dentro da parada')
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