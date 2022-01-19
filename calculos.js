const fs = require('fs');
var color = require('colors/safe');
const crearArchivo = (factor = 8, listar) => {
    return new Promise((resolve, reject) => {
        let resultado = '';


        for (let i = 1; i <= 10; i++) {
            //\n para salto de linea
            resultado += `${factor} x ${i} = ${factor * i}\n`;
        }
        if (listar) {
            console.log(color.yellow(`-----------------------`))
            console.log(color.yellow(`  tabla-del-${factor}.txt`))
            console.log(color.yellow(`-----------------------`))
            console.log(resultado);
        }
        fs.writeFile(`tabla-del-${factor}.txt`, resultado, (err) => {
            if (err) throw err;
        })
        resolve(`tabla-del-${factor}.txt`);
    })

}

module.exports = {
    crearArchivo,
}