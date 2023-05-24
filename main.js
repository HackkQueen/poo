/*
TODO La palabra reservada (lapiz) es la CLASE padre de mi plantilla
*/

/*
*sE CREA LA CLASE PRINCIPAL
*/
class lapiz{
    /*
    *SON LOS ATRIBUTOS
    ?EL # significa que ese atributo es privado
    */
    color
    #material 
    tamano
    #mina
    /*
    *Si el metodo es ESTATICO necesita un atributo ESTATICO

    *los atributos que se pueden quitar en la parte de arriba son los PUBLICOS
    *Si se quitan los parametros PRIVADOS entonces Saldran errores por no validacion de los datos
    */
    /*
    * @param {Es un atributo PUBLICO, son los atributos del lapiz ej.color} color 
    * @param {Es un atributo PUBLICO} tamano 
    * @param {Es un atributo PRIVADO} material 
    * @param {Es un atributo Privado} mina 
    */
    /*
    *Los datos en el constructor se vuelven una propiedad nueva
    ?lo que significa que THIS ayuda a que no sea necesaria colocarlos en la 
    ?parte superior sino que automaticamente los crea y "llama"
    */
    /*
    ?el constructor es donde se contruye
    ? El constructor es un metodo que se ejecuta automaticamente
    ? El construccion incia la variables 
    */
    constructor({color="Amarillo",material="9cm",tamano="madera",mina="carbon"}){
        this.color= color;
        this.#material= material;
        this.tamano= tamano;
        this.#mina= mina;   
    }

    /*
    ?Modificadores de acceso set y get
    *el get llama y el set modifica
    */

    get getMina(){
        return this.#mina;
    }
    set setMina(p2){
        this.#mina=p2;
    }

    /*
    ?Metodos estaticos--> Es algo que necesita la clase pero no interactua con los objetos
    *Algo externo 
    */

    static afilar(p1){
        return `La mina de ${p1} ha sido afilada`;
    }
}
/*
TODO INSTANCIA DE LA CLASE
?Es poder acceder a la clase 
*/

let lapiz1=new lapiz({material:"Diamante", mina:"Oro"});
let lapiz2=new lapiz({material:"Acero", mina:"Plata"});
let lapiz3=new lapiz({material:"Plastico", mina:"Plomo"});

/*
*Primera parte de instancia 
*/
console.log(lapiz1,lapiz2);

/*
*Metodo estatico
*/
console.log(lapiz.afilar(lapiz1.getMina));
console.log(lapiz.afilar(lapiz2.getMina));
/*
*Modificador de acceso
*/
lapiz3.setMina="marmol";
console.log(lapiz.afilar(lapiz3.getMina));


/*
?El polimorfismo va de la mano con la herencia
*polimorfismo-->evolucionar
*espada de madera padre(atacar)--> espada de diamante hijo(atacar(quita mas vida))
TODO HERENCIA
?Es cuando se hereda una parte o un atributo de la clase padre

*Herencia SIMPLE-->Mama
*Herencia Multiple-->Mama y Papa
*/

/*
*Extendiendo la clase se esta HEREDANDO
?El SUPER es para acceder al constructor de la clase HEREDADA
*/
class lapicero extends lapiz{
    constructor({mina="metalico"}){
        super({mina});
    }
    /*
    *"Polimorfismo" Actuacion de un polimorfismo
    */
    static afilar(p1){
        return `La mina de ${p1} no se puede afilar`;
    }
}

let mec=new lapicero({});
mec.setMina="Aluminio"


console.log(mec.getMina);
console.log(lapicero.afilar(mec.getMina))