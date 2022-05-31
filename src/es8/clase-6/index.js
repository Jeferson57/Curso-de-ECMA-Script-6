//Object.entries
const data = {
    frontend: 'Oscar',
    Backend: 'Isabel',
    Designer: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object.values
const values = Object.values(data);
console.log(values.length);


//Padding
const string = 'hello';
console.log(string.padStart(9, 'Hi, '));
console.log(string.padEnd(12, ' ------'))