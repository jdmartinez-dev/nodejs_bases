const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let textFile = '';
        let textConsole = '';
        let filename = `tabla-${ base }.txt`;
        let pathfile = `files/${ filename }`;

        for (let number = 1; number <= hasta; number++) {     
            textConsole += `${ colors.cyan(base) } x ${ number } = ${ colors.red(base * number) } \n`;
            textFile += `${ base } x ${ number } = ${ base * number } \n`;
        }
        
        // fs.writeFile(pathfile, textFile, (err) => {
        //     if (err) throw err;
        //     console.log(`${ pathfile } creado`);
        // });

        fs.writeFileSync(pathfile, textFile); // Async

        if (listar) {
            console.log('========================'.blue);
            console.log('  Tabla del:', base);
            console.log('========================'.green);
            
            console.log(textConsole);
        }

        return filename;
    } catch (error) {
        throw error;
    }
};

module.exports = {    
    crearArchivo // crearArchivo: crearArchivo (Redundante)
};