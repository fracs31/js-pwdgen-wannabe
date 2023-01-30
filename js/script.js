//Dichiarazione e assegnazione delle variabili
let password = document.getElementById("password"); //elemento HTML
let name = prompt("Inserisci il tuo nome: "); //nome
let surname = prompt("Inserisci il tuo cognome: "); //cognome
let color = prompt("Inserisci il tuo colore preferito: "); //colore preferito
let number = prompt("Inserisci il tuo numero preferito: "); //numero preferito

//Stampa nella console delle variabili
console.log(password);
console.log(name);
console.log(surname);
console.log(color);
console.log(number);

//Stampa della password nella HTML
password.innerHTML = name + surname + color + number;