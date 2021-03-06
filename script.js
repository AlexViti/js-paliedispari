const container = document.getElementById('main-container');
const output = document.querySelector('.output');
const btnPalindromes = document.getElementById('btn-palindromes');
const btnEvenOdd = document.getElementById('btn-even-odd');

/*
Palindroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

btnPalindromes.addEventListener('click', function() {
	container.innerHTML =`
		<h2>Palindrome</h2>

		<p class"my-3">Inserisci una parola nella barra sottostante per determinare se è palindroma o meno, poi premi invio o il bottone \"Controlla\".</p>

		<input type="text" placeholder="Inserisci qui la parola">
		<button class="btn btn-dark rounded-pill check">Controlla</button>
	`;

	output.innerHTML = '';

	const input = document.querySelector('input');
	const btnCheck = document.querySelector('.check');

	btnCheck.addEventListener('click', function() {
		palindromeChecker();
	});
	input.addEventListener('keypress', function(e) {
		if (e.key === 'Enter') {
			palindromeChecker();
		}
	});
	
	function palindromeChecker() {
		let inputString = input.value;
		if(palindrome(inputString)) {
			output.innerHTML = `${inputString} <strong>è</strong> una parola palindroma`;
		} else {
			output.innerHTML = `${inputString} <strong>non è</strong> una parola palindroma`;
		}
	}
});

// Check if a string is palindrome, it's NOT case sensitive
function palindrome(string) {
	let invertedString = reverseString(string);
	if (string.toLowerCase() == invertedString.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

// Return the reverse of a given string
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

btnEvenOdd.addEventListener('click', function() {
	container.innerHTML =`
		<h2>Pari e dispari</h2>

		<p class"my-3">Scegli se vuoi puntare su pari o dispari, poi scegli un numero dall' 1 al 5 per giocare alla morra contro il computer.</p>

		<select name="Even or odd">
			<option value="true">Pari</option>
			<option value="false">Dispari</option>
		</select>
		<input type="number" value="1" min="1" max="5" step="1">
		<submit class="btn btn-dark rounded-pill play">Gioca</submit>
	`;

	output.innerHTML = '';

	const btnPlay = document.querySelector('.play');
	const select = document.querySelector('select');
	const inputNumber = document.querySelector('input');

	btnPlay.addEventListener('click', function() {
		if (isNaN(inputNumber.value) || inputNumber.value < 1 || inputNumber.value > 5) {
			output.innerHTML = 'Inserisci un numero compreso fra 1 e 5';
		} else {
			let cpuNumber = randomNumber(1, 5);
			let sum = cpuNumber + parseInt(inputNumber.value);
			output.innerHTML = `Il computer ha scelto ${cpuNumber}`
			if (`${isEven(sum)}` == select.value) {
				output.innerHTML += `
					<div style="color: green; font-size: 1.5em; font-weight: 600">
						Hai vinto.
					</div>
				`;
			} else {
				output.innerHTML += `
					<div style="color: red; font-size: 1.5em; font-weight: 600">
						Hai perso.
					</div>
				`;
			}
		}
	})
});

// Function that generate a random number beetween given minimum and maximum
function randomNumber(min, max) {
	let number = Math.floor(Math.random() * max + min);
	return number;
}

// Function that check if a number is even
function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	} 
}