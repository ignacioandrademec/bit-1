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


//FORMULARIO COMPLETO

const $contactForm = document.getElementById("contactForm");
$contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $contactForm.name.value;
    const nameEmpresa = $contactForm.nameEmpresa.value;
    const nameNit = $contactForm.nameNit.value;
    const email = $contactForm.email.value;
    const selectorService = $contactForm.selectorService.value;
    const checkSector = $contactForm.checkSector.value;
    const message = $contactForm.message.value;

    console.log(name);
    console.log(nameEmpresa);
    console.log(nameNit);
    console.log(email);
    console.log(selectorService);
    console.log(checkSector);
    console.log(message);
    
    
    const result = `Apreciado ${name}. 
    
Gracias por diligenciar la información, le informamos que su empresa ${nameEmpresa} del ${checkSector} con NIT #${nameNit}, fue registrada correctamente.
    
Confirmamos que el área de servicio de ${selectorService} estará contactandolo en los proximos dias al correo registrado ${email}.
    
Atenderemos su mensaje "${message}", lo más pronto posible, que tenga un excelente día.
    
Cordialmente, 
    
Jose Andrade
Gerente de AG Polar Tech.`;

    alert(result);

    $contactForm.reset ();

});

