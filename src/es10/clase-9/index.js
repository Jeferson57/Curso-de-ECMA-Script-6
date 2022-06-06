let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(values => [value, values * 2]));

let helloStart = '         Hello World';
let helloEnd = 'Hello World        ';
console.log(helloStart, helloEnd);
console.log(helloStart.trimStart());
console.log(helloEnd.trimEnd());


try {

} catch {
    error
}


let entries = [["name, jeferson"], ["age", 18]];
console.log(Object.fromEntries(entries));

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);