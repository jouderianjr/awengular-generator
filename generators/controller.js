'use strict'

const fs = require('fs')
const templateSrc = `${__dirname}/templates/controller.tpl.js`

function generate(name, moduleName){

    return new Promise((resolve, reject) => {
        fs.readFile(templateSrc, loadTemplate)

        function loadTemplate(err, data){
            if(err){
                reject()
            }

        }
    })

}

exports.generate = generate