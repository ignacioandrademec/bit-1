"use strict";
const $contactForm = document.getElementById("contactForm");
$contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log($contactForm.name.value);

});