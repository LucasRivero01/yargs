const { crearArchivo } = require('./calculos');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
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

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));