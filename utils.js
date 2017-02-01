function getFullPathFile(filename){
    return `${process.cwd()}/${filename}`
}

function getFileName(name){
    return `${hiphenizeStr(name)}-controller.js`
}

function hiphenizeStr(name){
    let convertedName = name.replace(/[A-Z]/g, (match) => {
        return `-${match.toLowerCase()}`
    })

    return convertedName.startsWith('-') ? convertedName.substring(1) : convertedName
}

module.exports = {
    getFileName     : getFileName,
    getFullPathFile : getFullPathFile,
    hiphenizeStr    : hiphenizeStr
}