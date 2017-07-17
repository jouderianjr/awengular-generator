function setupArgsForTemplateFile(name, moduleName, type){
    let functionName   = lowerCaseFirstLetter(name) + type
    let controllerName = upperCaseFirstLetter(name) + type
    let filename       = `${hiphenizeStr(name)}-${lowerCaseFirstLetter(type)}.js`

    return {
        functionName : functionName,
        name         : controllerName,
        moduleName   : moduleName,
        filename     : filename
    }
}

function lowerCaseFirstLetter(str) {
    return str.replace(str.charAt(0), str.charAt(0).toLowerCase())
}

function upperCaseFirstLetter(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase())
}

function getFullPathFile(filename, folder){
    if ( folder ) {
        return `${process.cwd()}/${folder}/${filename}`
    }
    return `${process.cwd()}/${filename}`
}

function hiphenizeStr(name){
    let convertedName = name.replace(/[A-Z]/g, (match) => {
        return `-${match.toLowerCase()}`
    })

    return convertedName.startsWith('-') ? convertedName.substring(1) : convertedName
}

module.exports = {
    getFullPathFile          : getFullPathFile,
    hiphenizeStr             : hiphenizeStr,
    setupArgsForTemplateFile : setupArgsForTemplateFile,
    lowerCaseFirstLetter     : lowerCaseFirstLetter,
    upperCaseFirstLetter     : upperCaseFirstLetter,
}
