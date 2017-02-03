'use strict'

const fs            = require('fs')
const fileGenerator = require('./file-generator')
const utils         = require('./utils')

function generate(args) {
    let name       = args[0]
    let moduleName = args[1]

    return new Promise((resolve, reject) => {
        //Should create the folder, controller, service and template
        fs.mkdir(utils.hiphenizeStr(name), (err, data) => {
            if(err && err !== '')
            console.log('err')
            console.log(err)
            console.log('data')

            console.log(data)
        })
    })
}

exports.generate = generate