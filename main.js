'use strict';

const rock = document.getElementById('rockButton');
const paper = document.getElementById('paperButton');
const scissors = document.getElementById('scissorsButton');
const buttons = document.querySelector('.buttons');
const imgIzq = document.getElementById('imgLeft');
const imgDer = document.getElementById('imgRight');
const message = document.getElementById('message');
const players = document.getElementById('players');
const player = document.getElementById('player');
const compu = document.getElementById('cpu');
const punctuation = document.getElementById('punctuation');


// 1.MENSAJE PREGUNTANTO SI ESTA LISTO PARA JUGAR--->HECHO

// alert('Are You Ready Nigga?');

// 2. CUANDO UN BOTON SEA CLICADO ME LLEVA A LA FUNCION GAME QUE FILTRARá LO QUE DEBE HACER SEGUN EL BOTON ELEGIDO--->HECHO

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

function game(user, cpu) {
	//3 CREO CONTADOR QUE UTILIZARé EN LAS VALIDACIONES PARA SUMAR PUNTOS--->HECHO
	let scorePlayer = 0;
	let scoreCPU = 0;
	let totalGames = scorePlayer + scoreCPU;

	//4 OCULTO BOTONES MIENTRAS DOY PASO A LA JUGADA--->HECHO

	buttons.classList.add('hidden');

	//5 OCULTAR PLAYERS, MARCADOR Y NUMERO DE JUEGOS--->HECHO
	
	punctuation.classList.add('hidden');
	compu.classList.add('hidden'); 
	player.classList.add('hidden');

	//6 CUENTA ATRAS DE TRES SEGUNDOS--->HECHO

	let timer = 4;

	const countDown = () => {
		timer--;
		message.classList.add('countAnimation');
		message.style.fontSize = '550px';
		message.innerHTML = timer;

		if (timer === 0) {
			message.remove();
			// VOLVER A MOSTRAR MARCADOR Y PLAYERS--->HECHO
			punctuation.classList.remove('hidden');
	        player.classList.remove('hidden'); 
	        compu.classList.remove('hidden'); 
		}
	};

	setInterval(countDown, 1000);

	// HACER QUE CPU SAQUE JUGADA RANDOM


	// while (totalGames < 5) {

 
	// SACAR MANOS Y MOSTRAR MENSAJES

// 	if (user != cpu) {
// 		if (user === op1 && cpu === op3) {
// 			imgIzq.src = './images/rock_izq.jpg';
// 			imgDer.src = './images/scissors_der.jpg';
// 			message.innerHTML = 'YOU WIN!!';
// 			scorePlayer += 1;
// 		} else if (user === op2 && cpu === op1) {
// 			imgIzq.src = './images/paper_izq.jpg';
// 			imgDer.src = './images/rock_der.jpg';
// 			message.innerHTML = 'YOU WIN!!';
// 			scorePlayer += 1;
// 		} else if (user === op3 && cpu === op2) {
// 			imgIzq.src = './images/scissors_izq.jpg';
// 			imgDer.src = './images/paper_der.jpg';
// 			message.innerHTML = 'YOU WIN!!';
// 			scorePlayer += 1;
// 		} else {
// 			message.innerHTML = 'YOU LOOSE!!';
// 			scoreCPU += 1;
// 		}
// 	} else if (user === cpu) {
// 		message.innerHTML = 'EMPATE';
// 	}
// }
}

// PINTAR MARCADOR DENTRO DE SU PIZARRA

// MODAL FINAL

// const showModal = () => {
// 	message.innerHTML = 'Quieres la revancha o tienes miedo BITCH';
// 	modal.classList.remove('hidden');
// 	overlay.style.opacity = 1;
// AÑADIRLE AL HTML DOS BOTONES OCULTOS Y QUITARLE LA CLASE HIDEN AQUI
// };

// setTimeout(showModal, 5000);

// ------------
