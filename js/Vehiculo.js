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
TODO: CLASE PRINCIPAL VEHICULO
*/
class Vehiculo{
  marca
  modelo
  velocidad
  constructor({marca,modelo,velocidad}) {
    this.marca=marca;
    this.modelo=modelo;
    this.velocidad=parseInt(velocidad); 
  }
  acelerar(){
    this.velocidad+=10
    return `La VELOCIDAD del Vehiculo ${this.marca} es de ${this.velocidad}`  
  }
  static convertirKmHEnMph(velocidad){
    return velocidad/1.60934
  }
}
let vehiculo1=new Vehiculo({marca:"guchi",modelo:"Nova",velocidad:20})
document.querySelector('.res1').innerHTML = vehiculo1.acelerar()

/*
TODO: CLASE HEREDADA COCHE
*/
class Coche extends Vehiculo{
  combustible
  constructor({marca,modelo,velocidad,combustible}) {
    super({ marca,modelo,velocidad });
    this.combustible=parseInt(combustible); 
  }
  acelerar(){
    this.velocidad+=20
    return `La VELOCIDAD del Vehiculo ${this.marca} es de ${this.velocidad}`
  }
}

let coche1=new Coche({marca:"renol",modelo:"Pepitp",velocidad:50,combustible:90})
document.querySelector('.res2').innerHTML = coche1.acelerar()

/*
TODO: FORMULARIO
*/
const formulario=document.getElementById("formVehiculo");
formulario.addEventListener("submit",function(e){
  e.preventDefault();
  let data=Object.fromEntries(new FormData(e.target));
  const vehiculo=new Vehiculo(data)
  document.querySelector('.resto').innerHTML = vehiculo.acelerar();

  //convertirKmHEnMph
  document.querySelector('.res3').innerHTML=Vehiculo.convertirKmHEnMph(vehiculo.velocidad);
})