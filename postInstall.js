const chalk  = require('chalk')
const figlet = require('figlet')

const awengen = figlet.textSync('Awengen')

console.log(`
${chalk.yellow(awengen)}

${chalk.blue('Thanks for installing awengular-generator!')}
${chalk.blue('Type awengen --help to see all options')}
`)
