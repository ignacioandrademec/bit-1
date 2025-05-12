"use strict";
const $contactForm = document.getElementById("contactForm");
$contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $contactForm.name.value;
    const email = $contactForm.email.value;
    const message = $contactForm.message.value;

    console.log(name)
    console.log(email)
    console.log(message)
    
    // console.log($contactForm.name.value);
    // console.log($contactForm.email.value);
    // console.log($contactForm.message.value);
    
    const result = ` ${name}, gracias, tu información fue cargada correctamente`;

    alert(result);

    $contactForm.reset ();

});