//Parámetros en objetos
let name = "Jeferson";
let age = 32;

object = { name, age };
console.log(object);

//Arrow functions
//En funciones anónimas
const names = [
	{name: "Oscar", age: 32},
	{name: "Yesica", age: 27}
]

let listOfName = names.map(item => console.log(item.name));

//En funciones
const listOfName2 = (name, age, country) => {
	//...
}
//En funciones cuando es solo un parámetro
const listOfName3 = name => {
	//...
}
//Podemos operar los parámetros sin necesidad de las {}
const square = num => num * num;


//Promesas
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve("Hey!");
		} else {
			reject("Ups!");
		}
	})
}

helloPromise()
	.then(response => console.log(response))
	.catch(error => console.log(error));