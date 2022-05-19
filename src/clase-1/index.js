//Default Params o parámetros predeterminados
//Antes de ECMASCript 6+
function newFunction(name, age, country) {
    var name = name || 'Jeferson'; 
    var age = age || 18;
    var country = country || 'GT';
    console.log(name, age, country);
}

//Después de ECMAScript 6+
function newFunction2(name = 'Jeferson', age = 18, country = 'GT') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'COL');



//Concatenación: nos permite unir varios elemento
//Antes de ECMAScript 6+
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Después de ECMAScript 6+
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);