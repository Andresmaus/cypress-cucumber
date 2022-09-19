const elemento = require('../userinterfaces/LoginUI');

class IngresarCredenciales{

    datos = {
        userInput: () => cy.get(elemento.TXT_USERNAME),
        passInput: () => cy.get(elemento.TXT_PASSWORD)
    }

    user(arg){
        this.datos.userInput().type(arg);
    }

    pass(arg){
        this.datos.passInput().type(arg);
    }
}

module.exports = new IngresarCredenciales();