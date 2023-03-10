let obj = {
    nombre: 'Carlos', 
    edad: 44, 
    apellido: 'Ulibarri', 
    keyPress: function ()
    {
        return 'se ha presionado una tecla';
    }, 
    mouseOver: function () 
    {
        return 'el puntero del mouse esta arriba'; 
    }
}
//Manda llamar la key por medio de corchetes y comillas y el nombre de la key
console.log(obj.nombre);
console.log(obj['nombre']);  

//Accede a un key por medio de una variable
let myKey = 'nombre'; 
console.log(obj[myKey]); 

//Manda llamar las funciones
myKey = 'keyPress'; 
console.log(obj[myKey]());
myKey = 'mouseOver'; 
console.log(obj[myKey]()); 

//Se crea un array 
let myArray  = []; 

myArray.push(4); 
myArray.push('Una cadena');
myArray.push(obj); 
myArray.push(function () {
    return "hola desde el array"; 
});

//Se manda llamar el array -- Imprime todos los indices
console.log(myArray);
//Se manda llamar la funcion que se encuentra dentro del array -- la muestra
console.log(myArray[3]()); 
//Se manda llamar el objeto y su key mouseOver -- muestra el contenido de la key
console.log(myArray[2][myKey]());

//Array de funciones
let funcArray = []; 

funcArray.push(()=>{
    return "Function 1"
}); 
funcArray.push(()=>{
    return "Function 2"
});
funcArray.push(()=>{
    return "Function 3"
});

// Se mandan llamar las funciones del array con foreach 
// Se ejecutan las funciones que se tienen dentro del array 
funcArray.forEach((item)=> {
    console.log(item()); 
})

// Se inyecta la dependencia emiiter
let Emitter = require('./emitter');
//Se inicializa el emmiter
let emtr = new Emitter(); 

//Se manda llamar el metodo on y se pasan los parametros para la funcion
emtr.on('greet', () => {
    console.log('Somewhere, some said hello'); 
}); 
emtr.on('greet', () => {
    console.log('A greeting occurred!');
}); 

//Se manda llamar las funciones creadas con el metodo
console.log('Hello!'); 
emtr.emit('greet');

//Se manda llamar el metodo on para pasar la funcion
emtr.on('jump', () => {
    console.log('Someone jumped!'); 
}); 
//Se imprime el constructor
console.log(emtr);
//Se manda llamar la funcion creada -- solo se ejecuta la funci??n solicitada
emtr.emit('jump');  

