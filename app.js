const argv = require('./yargs').argv;
const porHacer = require('./por-hacer');

let comando = argv._[0]

switch( comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('==============================')
        for(let tarea of listado){
            console.log(`Descripción: ${tarea.descripcion}  Completado: ${tarea.completado}`);
        }
        
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
        //const cabecera = new CabeceraRequest({operacion: '1234', grupoProducto: '567'});
        //console.log(cabecera);

}