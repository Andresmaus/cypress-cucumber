Feature: Verificar el inicio de sesion correctamente
    Yo como usuario Quiero ingresar a Sawgs Lab Para validar mis credenciales

    Scenario: Login Exitoso
        Given el usuario ingresa a la app sawgs Lab
        When ingresa las credenciales de acceso
        When da click en el boton Sign In para ingresar
        Then valida que puedo ingresar correctamente

    