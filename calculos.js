const fs = require('fs');
var color = require('colors');
const crearArchivo = (factor = 8, listar) => {
    return new Promise((resolve, reject) => {
        let resultado = '';
        let salidaConsola = '';


        for (let i = 1; i <= 10; i++) {
            //\n para salto de linea
            resultado += `${factor} x ${i} = ${factor * i}\n`;
            salidaConsola += `${factor} ${'x'.green} ${i} ${'='.green} ${factor * i}\n`;
        }
        if (listar) {
            console.log(color.green(`========================`))
            console.log('  tabla-del: '.green, color.blue(factor))
            console.log(color.green(`========================`))
            console.log(salidaConsola);
        }
        fs.writeFile(`./salida/tabla-del-${factor}.txt`, resultado, (err) => {
            if (err) throw err;
        })
        resolve(`tabla-del-${factor}.txt`);
    })

}

module.exports = {
    crearArchivo,
}