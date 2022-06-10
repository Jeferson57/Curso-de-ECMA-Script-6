//string.replaceAll
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replaceString = string.replace("JavaScript", "Python");
console.log(replaceString);

const replaceString2 = string.replaceAll("JavaScript", "Python");
console.log(replaceString2);


//Métodos privados
class Message {
    #show(value) {
        console.log(value);
    }

    get #add(val) {
        ...
    }
}

const message = new Message();
message.show('Hola');


//Promise.any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(Response => console.log(Response));


//WeakRef
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}


//Thursy and Falsy
let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue ??= isFalse);