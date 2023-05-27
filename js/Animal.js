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
TODO: PRIMERA PARTE DEL EJERCICIO SECCION ANIMAL
*/  
class Animal{
    nombre
    edad
    sonido
    constructor({nombre,edad,sonido}){
        this.nombre=nombre;
        this.edad=parseInt(edad);
        this.sonido=sonido;
    }
    hacerSonido(){
        return `El animal ${this.nombre} tiene ${this.edad} años de edad y hace un sonido ${this.sonido}`;
    }
}
let animal1=new Animal({nombre:"Leon",edad:20,sonido:"Grrrr"});
document.querySelector('.resto').innerHTML = animal1.hacerSonido()



/*
TODO: PRIMERA PARTE DEL EJERCICIO SECCION PERRO
*/  
class Perro extends Animal{
    raza
    constructor({nombre,edad,sonido,raza}){
        super({ nombre,edad,sonido });
        this.raza= raza;
    }
    moverCola(){
        return `El perro ${this.nombre} de raza ${this.raza} esta moviendo la cola`;
    }

}


const formulario=document.getElementById("formAnimal");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const animal=new Animal(data)
    animal.hacerSonido();
    document.querySelector('.res1').innerHTML = animal.hacerSonido()

    const raza = e.target.raza.value;
    const mov = new Perro({ nombre: animal.nombre, raza});
    document.querySelector('.res2').innerHTML = mov.moverCola();
})