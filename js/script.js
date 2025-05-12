"use strict";

// FORMULARIO SENCILLO

const $contactForm2 = document.getElementById("contactForm2");
$contactForm2.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $contactForm2.name.value;
    const email = $contactForm2.email.value;
    const message = $contactForm2.message.value;

    console.log(name);
    console.log(email);
    console.log(message);
    
    const result = `Apreciado ${name}.
    
Gracias por diligenciar la información.

Lo invitamos a registrarse con su correo ${email}, en la sección Contáctenos, para cargar la información adicional de su empresa y su requerimiento.
    
Atenderemos su mensaje "${message}", lo más pronto posible, que tenga un excelente día.
    
Cordialmente, 
    
Jose Andrade
Gerente de AG Polar Tech.`;

    alert(result);

    $contactForm2.reset ();

});

