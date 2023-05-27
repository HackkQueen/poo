# Taller 1  JavaScript (POO)

En este proyecto se realizaron cinco ejercicios de javascript orientado a objetos en donde se mecanizan los procesos de las clases y métodos para el funcionamiento correcto del sistema.

**Se utilizan diferentes procesos como: **

### Clases

```javascript
class Figura{
  color
  area
  constructor({color,area}){
    this.color=color;
    this.area=parseFloat(area);
  }
  calcularArea(){
    return `El area de la figura es ${this.area}`
  }
}
```

### Herencia

```javascript
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
```

### Métodos Estáticos

```javascript
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
```

## Entre muchas cositas mas, disfruten y entiendan paso a paso el código conmigo.
