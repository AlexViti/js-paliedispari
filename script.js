const container = document.getElementById('main-container');
const output = document.querySelector('.output');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const btnPalindromes = document.getElementById('btn-palindromes');
const btnEvenOdd = document.getElementById('btn-even-odd');

/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

btnPalindromes.addEventListener('click', function() {
	container.innerHTML =`
		<h2>Palindrome</h2>

		<p class"my-3">Inserisci una parola nella barra sottostante per determinare se è palindroma o meno</p>

		<input type="text" placeholder="Inserisci qui la parola">
		<button class="btn btn-dark rounded-pill check">Controlla</button>
	`;

	output.innerHTML = '';

	const input = document.querySelector('input');
	const btnCheck = document.querySelector('.check');

	btnCheck.addEventListener('click', function() {
		let inputString = input.value;
		if(palindrome(inputString)) {
			output.innerHTML = `${inputString} è una parola palindroma`;
		} else {
			output.innerHTML = `${inputString} non è una parola palindroma`;
		}
	});
});

function palindrome(string) {
	let invertedString = reverseString(string);
	if (string.toLowerCase() == invertedString.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

function reverseString(string) {
	let reverseString = string;
	reverseString = reverseString.split('');
	reverseString = reverseString.reverse();
	reverseString = reverseString.join('');
	return reverseString;
}


/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/