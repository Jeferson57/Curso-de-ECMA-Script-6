//Array.flat()
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));


//Array.flatMap()
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));


//.trimStart()
let helloStart = '         Hello World';
let helloEnd = 'Hello World        ';
console.log(helloStart, helloEnd);
console.log(helloStart.trimStart());
console.log(helloEnd.trimEnd());


//Optional catch biding
try {

} catch {
    error
}


//.fromEntries()
let entries = [["name", "jeferson"], ["age", 18]];
console.log(Object.fromEntries(entries));


//Objeto de tipo símbolo
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
