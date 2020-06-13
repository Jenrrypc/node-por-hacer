const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('The file has been saved!');
    });
}

const cargarDB = () => {
    const dataBuffer = fs.readFileSync('./db/data.json');
    const dataJSON = dataBuffer.toString();
    console.log('dataBuffer: ', dataBuffer);

    console.log('dataBuffer.toString: ', dataBuffer.toString());
    if (dataJSON)
        listadoPorHacer = JSON.parse(dataJSON);
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    console.log('porHacer: ', porHacer);
    console.log('listadoPorHacer: ', listadoPorHacer);

    listadoPorHacer.push(porHacer);
    guardarDB();
    
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer; 
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
        guardarDB();
        return true;
    }else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}