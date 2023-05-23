const nombre = document.getElementById("nombres");
const apellido = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


//Expresiones regulares: se inicia con /^ y luego dento de [] vamos escribiendo por ejemplo que tenga mayuculas, numeros, etc. Lo que esta entre {} es la extension que queremos que tengo, por ejemplo en nombre queremos que se admita desde 1 hasta max 40 caracteres. Las expresiones terminan con $/

//La palabra regex la utilizamos para referirnos a las expresiones regulares, por lo tanto esas variables definimos para que guarden estan ultimas.

form.addEventListener ("submit", e =>{
    e.preventDefault();

    let warnings =""
    entrar=false;
    let regexNombre= /^[a-zA-ZÀ-ÿ\s]{2,10}$/
    let regexEmail= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let regexTelefono= /^\d{7,14}$/
    parrafo.innerHTML=""

    if(!regexNombre.test(nombre.value)){
      warnings +=`El nombre tiene que ser de 2 a 10 dígitos y solo puede contener letras. \n `
      entrar=true;
    }
   
    if(!regexNombre.test(apellido.value)){
        warnings +=`El apellido tiene que ser de 2 a 10 dígitos y solo puede contener letras.  \n `
        entrar=true;
      }

    if(!regexEmail.test(correo.value)){
        warnings +=`El correo es invalido \n` 
        entrar=true;
    }

    if(!regexTelefono.test(telefono.value)){
        warnings +=`El teléfono solo puede contener números y el maximo son 14 dígitos ` 
        entrar=true;
    }

    if(entrar){
        parrafo.innerText = warnings
    }else {

       form.submit();
    }

    })







