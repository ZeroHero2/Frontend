// --------------------- Caracteres -----------------------------
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

// String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto);

// Acceder a caracteres 
const saludo = 'Hola como estas';
console.log(saludo[2]);
console.log(saludo.indexOf('o')) // Posicion de la primera o
console.log(saludo.indexOf('como')) //Devuelve la posicion de la palabra
console.log(saludo.lastIndexOf('o')) //Devuelve la ultima posicion de la o 
console.log(saludo.slice(3,6)) //Devuelve los valores en las posiciones
console.log(saludo.length) // Ver longitud del string
console.log(saludo.toLocaleUpperCase) // Ver string en mayusculas
console.log(saludo.toLocaleLowerCase) // Ver string en minusculas

// --------------------- Numeros -----------------------------
const num1 = 4;
const num2 = 8;
const suma = num1 + num2;
const multiplicacion = num1 * num2;
console.log ("La suma es " + suma);

//Modulo y exponenciacion 
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precision de decimales 
const resultado = 0.1 + 0.3;
console.log(resultado.toFixed(1));

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-12);
const aleatorio = Math.random();

// --------------------- Booleanos -----------------------------
const isActive = true; //is o has es util para nombrar la variables tipo booleanas
const hasPermission = false;
const result = 5 > 3;

// --------------------- Funciones -----------------------------
// Callback funcion que se pasa como argumento 
function a () {}
function b (a){}
b(a)

// Retornando funciones 
function a (){
    function b (){}
    return b
}

//Asignar ffuncioes a varibales "Expresion de funcion"
const a = function (){}

//Propiedades y metodos
function a (){}
const obj = {}
a.call (obj)

//Funciones anidadas
function a (){
    function b (){
        function c (){

        }
        c()
    }
    b()
}
a()

//Almacenar funcines en objetos
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('Despeguen!!!')
    }
}
rocket.launchMessage()
 
// --------- Funciones puras e inpuras ------------
//Funciones puras
/*
Side effects
1.Modificar varibales globales 
2. Modificar parametros
3. Solicitudes HTTP
4. Imprimir mensajes de pantalla o consola
5. Manipulacion del DOM
*/
function square (x){
    return x * x;
}

function addTen (y){
    return y +10;
}

const numero = 7;
const finalResult = addTen(square(numero))
console.log(finalResult);

// ------------- Métodos bind, call y apply --------
const owner = 'Jafeth'
const address = 'Calle123'

function dogGretting (owner,address){
    console.log(`Hola mi nombre es ${this.name}, mi dueño es ${owner} y mi direccion es ${address}`)
}
const dog = {
    name: 'Fido'
}
// ---- Call ---- Llamar a la funcion y colocar parametros
dogGretting.call(dog, owner, address)

// ---- Apply-----Se puede llamar con apply y array
//Se pasan los parametros 
const necessaryValues = [owner,address]
//Se pasa la funcion - metodo (objeto) - parametros
dogGretting.apply(dog, necessaryValues)

// ---- Bind -----Se crea una funcion ejecutable
const bindingWithBind = dogGretting.bind(dog, owner, address)

bindingWithBind()

 // ------- Funciones flecha y enlace léxico ------
// Se retir la palabra function 
// Se agrega una flecha que indica el return
const greeting = function(name){
    return `Hola ${name}`
}
// Returno explicito 
const newGreeting = (name) => {
    return `Hola ${name}`
}
// Return implicito
// Se quitan los corchetes 
const newGreetingImplicit = (name) => `Hola ${name}`


//Lexical Bindings --------------------------------
//Creacion de mi objeto y metodos
const finctionalCharacter = {
    name: 'Uncle Ben',
    saySomething: function(message){
        console.log(`El ${this.name} dice: ${message}`)
    },
    saySomethingArrow:(message) =>{
        console.log(`El ${this.name} dice: ${message}`)
    }
}
finctionalCharacter.saySomething('Un gran poder conlleva una gran responsabilidad')
finctionalCharacter.saySomethingArrow('Cuidado hombre araña')