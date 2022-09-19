import {Before,Given,When,And,Then} from '@badeball/cypress-cucumber-preprocessor';
const Datos = require('../../fixtures/datos.json');
const abrir = require("../../support/tasks/AbrirTask");
const ingresar = require("../../support/tasks/IngresarTask");
const cliquear = require("../../support/tasks/CliquearTask");
const validar = require("../../support/questions/Validar");

Before(() =>{
    cy.visit('/');
});

Given("el usuario ingresa a la app sawgs Lab", function () {
    ingresar.user(Datos.username);
});

When("ingresa las credenciales de acceso", function () {
    
    ingresar.pass(Datos.password);
});

When("da click en el boton Sign In para ingresar", function (){
    cliquear.signIn();
});

Then("valida que puedo ingresar correctamente", function () {
    validar.validarMensaje(Datos.producto);
});