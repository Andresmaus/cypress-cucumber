const elemento = require('../userinterfaces/LoginUI');

class CliquearTask{

    datos = {
        signBtn: () => cy.xpath(elemento.BTN_SIGN_IN)
    }

    signIn(){
        this.datos.signBtn().click();
    }
}

module.exports = new CliquearTask;