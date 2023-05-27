/*
TODO: VALIDACION DE FORMULARIO.
*/
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
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
/*
TODO: PRIMERA PARTE DEL EJERCICIO SECCION PERSONA
*/
class Persona{
    nombre
    edad
    sexo
    constructor({nombre,edad,sexo}){
        this.nombre=nombre;
        this.edad=parseInt(edad);
        this.sexo=sexo;
    }
    saludar(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años de edad y mi sexo es ${this.sexo}`;
    }
    static esMayorDeEdad(edad){
      if (edad >= 18){
          return `<p>Es MAYOR de edad</p>`
      } else {
          return `<p>Es MENOR de edad</p>`
      }
    }
    get getEdad(){
      return this.edad
    }
}

let persona1=new Persona({nombre:"Maria Cubides",edad:20,sexo:"Femenino"});
document.querySelector('.res1').innerHTML = persona1.saludar()

/*
TODO: SEGUNDA PARTE DEL EJERCICIO SECCION ESTUDIANTE
*/
class Estudiante extends Persona{
  carrera
  constructor({nombre,edad,sexo,carrera}){
    super({ nombre,edad,sexo });
    this.carrera = carrera;
  }
  estudiar(){
    return `Yo ${this.nombre} estoy estudiando ${this.carrera}`;
  }
}

let estudiante1=new Estudiante({nombre:"Pepito Perez",edad:225,sexo:"Alienigena",carrera:"Naves Espaciales"});
document.querySelector('.res3').innerHTML = estudiante1.saludar() + ", teniendo encuenta eso,  " + estudiante1.estudiar();
/*
TODO:  FORMULARIO
*/

const formulario=document.getElementById("formPersona");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const persona=new Persona(data)
    persona.saludar();
    document.querySelector('.resto').innerHTML = persona.saludar()

    const carrera = e.target.carrera.value;
    const est = new Estudiante({ nombre: persona.nombre, carrera });
    document.querySelector('.res2').innerHTML = est.estudiar();

    const esMayorDeEdad = Persona.esMayorDeEdad(persona1.edad);
    document.querySelector('.res4').innerHTML = `La Persona ${persona1.nombre} es: ${esMayorDeEdad} Porque tiene ${persona1.getEdad} años.`;
})

