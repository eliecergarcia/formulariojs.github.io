/**
 * Declaracion de variables del formulario
 */
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const mensaje = document.getElementById("mensaje");


//variable para la expresion regular
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(mensaje.value);
    console.log(mensaje.value.length);
    //validar nombre
    if (!userName.value.trim() || !regUserName.test(userName.value)) {
        alert('Nombre invalido');
    }
    //validar email 
    if (!userEmail.value.trim() || !regUserEmail.test(userEmail.value)) {
        alert('Email invalido');
    }
    //validar mensaje
    if (mensaje.value.length <1 ) {
        alert("No se permite ningun campo vacio");
    }
    console.log("los datos fueron enviados");
});