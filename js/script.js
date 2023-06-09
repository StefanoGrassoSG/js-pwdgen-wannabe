const nameFromPrompt = prompt ('Inserisci il tuo nome');

const lastnameFromPrompt = prompt ('Inserisci il tuo cognome');

const colorFromPrompt = prompt ('Inserisci il tuo colore preferito');

const sum = nameFromPrompt + lastnameFromPrompt +colorFromPrompt + '101';

console.log('sum', sum, typeof sum);

document.writeln(sum);