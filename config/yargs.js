const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base para la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'Muesta la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'Hasta donde debe iterar la tabla'
    })
    .check(( argv, options ) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        }

        return true;
    })
    .argv;

module.exports = argv;