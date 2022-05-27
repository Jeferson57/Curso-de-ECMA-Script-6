//Multi línea en los string
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" 
+ "otra frase epica que necesitamos";

let lorem2 = `otra frase epica que necesitamos
Ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);



//Desestructuración de elemento
let person = {
    name: "Jeferson",
    age: 18,
    country: "GT",
}

//Antes
console.log(person.name, person.age, person.country);

//Después
let { name, age, } = person;
console.log(name, age,);



//Spread Operator: nos permite expandir varios elementos
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

//LET y CONST
{
	var globalVar = "Global Var";
}

{
	let globalLet = "Global Let";
}

console.log(globalVar);
console.log(globalLet);

const a = "b";
a = "a";
console.log(a);