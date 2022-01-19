const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero que se va a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Indica si se va a mostrar el listado por pantalla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'No es un numero'
        }
        if (argv.b < 1 || argv.b > 20) {
            throw 'Debes colocar un valor de base entre 1 y 20'
        }
        return true
    })
    .argv;

module.exports = argv;