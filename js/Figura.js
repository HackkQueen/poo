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

class Figura{
  color
  area
  constructor({color,area}){
    this.color=color;
    this.area=area;
  }
  calcularArea(){
    return `El area de la figura es ${this.area}`
  }
}

let figura1=new Figura({color:"Rojo",area:50});
console.log(figura1.calcularArea());
document.querySelector('.res1').innerHTML = figura1.calcularArea()

class Circulo extends Figura{
  radio
  constructor({color,area,radio}){
    super({ color,area });
    this.radio=radio;
  }
  calcularArea(){
    this.area=Math.PI*Math.pow(this.radio,2);
    return `El area del CIRCULO es de ${this.area}`
  }
}

let circulo1=new Circulo({color:"Verde",area:90,radio:15});
console.log(circulo1.calcularArea());
document.querySelector('.res3').innerHTML = circulo1.calcularArea()




const formulario=document.getElementById("formFigura");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    const figura=new Figura(data)
    figura.calcularArea();
    console.log(figura.calcularArea());
    document.querySelector('.resto').innerHTML = figura.calcularArea()

    const radio = e.target.radio.value;
    const cir = new Circulo({radio});
    console.log(cir.calcularArea());
    document.querySelector('.res2').innerHTML = cir.calcularArea();
})