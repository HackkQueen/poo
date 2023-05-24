(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

class Persona{
    nombre
    edad
    sexo
    constructor({nombre,edad,sexo}){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años de edad y soy ${this.sexo}`;
    }
}

const formulario=document.getElementById("formPersona");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const persona=new Persona(data)
    persona.saludar();
    console.log(persona.saludar());
})