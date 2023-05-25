/*
TODO: VALIDACION DE FORMULARIO
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
        this.edad=edad;
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
console.log(persona1.saludar());
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
    return `La carrera que el estudiante ${this.nombre} esta estudiando es ${this.carrera}`;
  }
}

let estudiante1=new Estudiante({nombre:"Maria Cubides",edad:225,sexo:"Alienigena",carrera:"Robot"});
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
document.querySelector('.res3').innerHTML = estudiante1.saludar() + ", teniendo encuenta eso:  " + estudiante1.estudiar();
/*
TODO:  FORMULARIO
*/

const formulario=document.getElementById("formPersona");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const persona=new Persona(data)
    persona.saludar();
    console.log(persona.saludar());
    document.querySelector('.resto').innerHTML = persona.saludar()

    const carrera = e.target.carrera.value;
    const est = new Estudiante({ nombre: persona.nombre, carrera });
    console.log(est.estudiar());
    document.querySelector('.res2').innerHTML = est.estudiar();

    const esMayorDeEdad = Persona.esMayorDeEdad(persona.edad);
    console.log(`La Persona ${persona1.nombre} es: ${esMayorDeEdad}`);
    document.querySelector('.res4').innerHTML = `La Persona ${persona1.nombre} es: ${esMayorDeEdad}`;
})