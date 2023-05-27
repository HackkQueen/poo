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
TODO: CLASE PRINCIPAL EMPLEADO
*/
class Empleado{
  static id=0
  nombre
  edad
  sueldo
  constructor({nombre,edad,sueldo}){
    this.nombre=nombre;
    this.edad=parseInt(edad);
    this.sueldo=parseFloat(sueldo);
  }
  calcularSalarioAnual(){
    return `El salario anual de ${this.nombre} es de ${this.sueldo*12}`
  }
  static generarIdEmpleado(){
    return ++Empleado.id;
  }
}
let empleado1=new Empleado({nombre:"Nicolas",edad:20,sueldo:1200000});
document.querySelector('.res1').innerHTML = empleado1.calcularSalarioAnual()

/*
TODO: CLASE HEREDADA GERENTE
*/
class Gerente extends Empleado{
  departamento
  constructor({nombre, sueldo,departamento}){
    super({ nombre, sueldo });
    this.departamento=departamento;
  }
  calcularSalarioAnual(){
    return `El salario anual del GERENTE es de ${(this.sueldo*0.1)*12}`
  }
}

let gerente1=new Gerente({nombre:"Santiago",sueldo:2500000,departamento:"Sistemas"});
document.querySelector('.res3').innerHTML = gerente1.calcularSalarioAnual()

/*
TODO: FORMULARIO
*/

const formulario=document.getElementById("formEmpleado");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const empleado=new Empleado(data)
    document.querySelector('.resto').innerHTML = empleado.calcularSalarioAnual()
    const gerente=new Gerente(data)
    document.querySelector('.res2').innerHTML = gerente.calcularSalarioAnual()

    document.querySelector('.res4').innerHTML = Empleado.generarIdEmpleado()

})