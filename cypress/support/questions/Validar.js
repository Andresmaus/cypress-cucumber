const elemento = require('../userinterfaces/LoginUI');

class Validar{
    datos = {
        mensaje: () => cy.get(elemento.LBL_PRODUCTS)
    }
    
    validarMensaje(dato){
        this.datos.mensaje().should('be.visible').and('have.text',dato);
    }
}

module.exports = new Validar();