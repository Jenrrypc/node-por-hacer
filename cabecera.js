class CabeceraRequest {
    constructor({
        operacion = undefined,
        grupoProducto = undefined
    }) {
        this.operacion = operacion;
        this.grupo_producto = grupoProducto;
      }
}

module.exports = CabeceraRequest;