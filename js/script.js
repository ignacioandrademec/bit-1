"use strict";

// FORMULARIO SENCILLO

const $contactForm = document.getElementById("contactForm");
$contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $contactForm.name.value;
    const nameEmpresa = $contactForm.nameEmpresa.value;
    const nameNit = $contactForm.nameNit.value;
    const email = $contactForm.email.value;
    const selectorService = $contactForm.selectorService.value;
    const message = $contactForm.message.value;

    console.log(name);
    console.log(nameEmpresa);
    console.log(nameNit);
    console.log(email);
    console.log(selectorService);
    console.log(message);
    
    
    const result = `Apreciado ${name}. 
    
    Gracias por diligenciar la información, su empresa ${nameEmpresa} con NIT #${nameNit} fue registrada con éxito.
    
    Confirmamos que el área de servicio de ${selectorService} estará contactandolo en los proximos dias al correo registrado ${email}.
    
    Atenderemos su mensaje "${message}", lo mas pronto posible, que tenga un excelente día.
    
    Cordialmente, 
    
    Jose Andrade
    Gerente de AG Polar Tech.`;

    alert(result);

    $contactForm.reset ();

});

