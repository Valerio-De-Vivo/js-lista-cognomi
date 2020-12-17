// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova



// VAR NOME (PRIMA LETTERA MAIUSCOLA) 

var inputNome = prompt('Inserisci il tuo cognome');
var primaLettera = inputNome.charAt(0).toUpperCase();
var restoNome = inputNome.substring(1).toLowerCase();

var cognome = primaLettera + restoNome;

console.log(cognome);


// ARRAY COGNOMI 

var cognomi = ['Bianchi' , 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

cognomi.push(cognome);

// ORDINARE LISTA IN ORDINE ALFABETICO 

var cognomiOrdinati = cognomi.sort();

console.log(cognomiOrdinati);

// POSIZIONE DEL COGNOME 

var posizioneCognome = cognome;

for (i = 0; i < cognomi.length ; i++) {
    if (posizioneCognome == cognomi[i]) {
        document.getElementById('position').innerHTML = 'Il tuo cognome è in ' + [i + 1] + ' posizione!';
    }
}
