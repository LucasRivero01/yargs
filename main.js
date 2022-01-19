const { crearArchivo } = require('./calculos');

const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));